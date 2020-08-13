import { Request, Response } from "express";
import AuthenticateService from "../services/AuthenticateService";

export default class CreateSessionController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateService = new AuthenticateService();

    try {
      const { findUser, token } = await authenticateService.execute({
        email,
        password,
      });

      return response.status(201).json({ findUser, token });
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }
}
