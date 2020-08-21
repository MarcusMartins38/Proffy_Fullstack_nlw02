import db from "../database/connection";
import { hash } from "bcryptjs";

interface User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface Request {
  name: string;
  surname: string;
  email: string;
  password: string;
  avatar?: string;
}

class CreateUserService {
  public async create({
    name,
    surname,
    email,
    password,
    avatar,
  }: Request): Promise<User> {
    const alreadyExist = (await db("users")).findIndex(
      (user) => email === user.email
    );

    if (alreadyExist !== -1) {
      throw new Error("This email already exist");
    }
    const hashedPassword = await hash(password, 8);

    const user = {
      name,
      surname,
      email,
      password: hashedPassword,
      avatar,
    };

    await db("users").insert(user);

    return user;
  }
}

export default CreateUserService;
