import { Router } from "express";

const userRoutes = Router()

userRoutes.post('/', (req, res) => {
    return userController.createUser(req, res)
})

export { userRoutes }