import { Router } from "express";
import { userRoutes } from "./userRoutes/userRoutes";
import { authRoutes } from './authRoutes/authRoutes'

const router = Router()

router.use('/api/users', userRoutes)
router.use('/api/auth', authRoutes)

export { router }