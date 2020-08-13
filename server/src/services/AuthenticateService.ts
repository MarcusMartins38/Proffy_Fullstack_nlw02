import db from "../database/connection";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";

interface Request {
  email: string;
  password: string;
}

class AuthenticateService {
  public async execute({ email, password }: Request) {
    const findUser = (await db("users")).find((user) => user.email === email);

    if (!findUser) {
      throw new Error("Incorrect email/password combination.");
    }

    const passwordCompare = await compare(password, findUser.password);

    if (!passwordCompare) {
      throw new Error("Incorrect email/password combination.");
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: findUser.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return token;
  }
}

export default AuthenticateService;
