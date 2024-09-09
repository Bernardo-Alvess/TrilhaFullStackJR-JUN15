import { authController } from "@controllers/AuthController";
import { Router } from "express";

const authRoutes = Router()

authRoutes.post('/login', (req, res) => {
    authController.loginUser(req, res)
})

export { authRoutes }   