import { User } from "@entities/UserEntity";
import { SqlLiteUserRepository } from "@repositories/implementation/SqlLiteUserRepository";
import { Request, Response } from "express";

class UserController {
    constructor(
        private readonly userRepository: SqlLiteUserRepository
    ) { }

    async createUser(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;
        //TODO: implementar a criptografação de senha, atualmente salvando como plain text
        const newUser = new User({ name, email, password })

        try {
            this.userRepository.createUser(newUser)
            return res.status(201).json({ id: newUser.id })
        } catch (e) {
            if (e instanceof Error) res.json({ msg: e.message })
            return res.json({ msg: 'unknown error' })
        }
    }
}

const repository = new SqlLiteUserRepository()
const userController = new UserController(repository)

export { userController }