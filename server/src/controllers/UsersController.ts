import { Request, Response } from "express";
import db from "../database/connection";
import CreateUserService from "../services/CreateUserService";

export default class UsersController {
  async index(request: Request, response: Response) {
    const getAllUsers = await db("users");

    return response.status(200).json(getAllUsers);
  }

  async create(request: Request, response: Response) {
    const { name, surname, email, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.create({
      name,
      surname,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}
