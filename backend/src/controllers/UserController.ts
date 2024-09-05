import { Request, Response } from "express";

export class UserController {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(req: Request, res: Response) {

    }
}