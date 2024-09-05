import { userController } from '@controllers/UserController'
import { Router } from "express";

const userRoutes = Router()

userRoutes.post('/', (req, res) => {
    userController.createUser(req, res)
})

export { userRoutes }