import { userController } from '@controllers/UserController'
import { Router } from "express";

const userRoutes = Router()

userRoutes.post('/', (req, res) => {
    console.log(req.body)
    userController.createUser(req, res)
})

export { userRoutes }