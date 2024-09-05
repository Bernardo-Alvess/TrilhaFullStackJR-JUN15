import { Router } from "express";
import { UserController } from "@controllers/UserController"

const userRoutes = Router()

userRoutes.post('/', (req, res) => {
    return UserController.createUser(req, res)
})

export { userRoutes }