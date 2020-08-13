import { Request, Response } from "express";
import db from "../database/connection";
import AuthenticateService from "../services/AuthenticateService";

export default class CreateSessionController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateService = new AuthenticateService();

    const { findUser, token } = await authenticateService.execute({
      email,
      password,
    });

    return response.status(201).json({ findUser, token });
  }
}
