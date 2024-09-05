import { SqlLiteUserRepository } from "@repositories/implementation/SqlLiteUserRepository";
import { Request, Response } from "express";

class UserController {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    createUser(req: Request, res: Response) {

    }
}

const repository = new SqlLiteUserRepository()
const userController = new UserController(repository)

export { userController }