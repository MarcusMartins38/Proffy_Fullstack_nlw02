import db from "../database/connection";
import path from "path";
import fs from "fs";
import { networkInterfaces } from "os";

import uploadConfig from "../config/upload";

interface Request {
  user_id: string;
  avatarFilename: string;
}

interface Response {
  name: string;
  surname: string;
  email: string;
  avatar: string;
}

class UpdateUserAvatarService {
  public async execute({
    user_id,
    avatarFilename,
  }: Request): Promise<Response> {
    const findUser = await (await db("users")).find(
      (user) => user.id === Number(user_id)
    );

    if (!findUser) {
      throw new Error("Only authenticated users can change avatar");
    }

    if (findUser.avatar) {
      // Deletar avatar anterior

      const userAvatarFilePath = path.join(
        uploadConfig.directory,
        findUser.avatar
      );
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    const nets = networkInterfaces();
    const results = Object.create(null);

    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        if (net.family === "IPv4" && !net.internal) {
          if (!results[name]) {
            results[name] = [];
          }
          results[name].push(net.address);
        }
      }
    }

    const machineIp = results.enp2s0[0];

    await db("users")
      .where("id", "=", findUser.id)
      .update("avatar", avatarFilename);

    const user = {
      ...findUser,
      avatar: avatarFilename,
      avatar_url: `http://${machineIp}:3333/files/${avatarFilename}`,
    };

    delete user.password;

    return user;
  }
}

export default UpdateUserAvatarService;
