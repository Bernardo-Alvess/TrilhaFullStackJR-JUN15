import { SqlLiteUserRepository } from "@repositories/implementation/SqlLiteUserRepository";
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { createToken } from "src/util/createToken";

class AuthController {
    constructor(
        private readonly userRepository: SqlLiteUserRepository
    ) { }

    async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const user = await this.userRepository.getUser(email)

            if (user) {
                const decriptedPassword = await bcrypt.compare(password, user.password)
                if (decriptedPassword) {
                    const token = createToken(user.id)
                    return res.status(200).json({ token })
                }
            } else {
                //#TODO: Implementar um Toast para avisar o usuario que algo aconteceu
                return res.status(404).json({ message: 'User not found' })
            }
        } catch (e) {
            if (e instanceof Error)
                res.status(500).json({ msg: e.message })

            res.status(500).json({ msg: 'Internal server error' })
        }
    }
}

const repository = new SqlLiteUserRepository()
const authController = new AuthController(repository)

export { authController }