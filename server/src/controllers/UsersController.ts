import { Request, Response } from "express";
import db from "../database/connection";
import CreateUserService from "../services/CreateUserService";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

import { networkInterfaces } from "os";

export default class UsersController {
  async index(request: Request, response: Response) {
    const getAllUsers = await db("users");

    return response.status(200).json(getAllUsers);
  }

  async create(request: Request, response: Response) {
    const { name, surname, email, password } = request.body;

    const createUserService = new CreateUserService();

    try {
      const user = await createUserService.create({
        name,
        surname,
        email,
        password,
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/200px-User_font_awesome.svg.png",
      });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }

  async updateAvatar(request: Request, response: Response) {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();

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

      const user = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }
}
