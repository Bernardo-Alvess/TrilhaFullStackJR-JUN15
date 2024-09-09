import { Router } from "express";
import { userRoutes } from "./userRoutes/userRoutes";
import { authRoutes } from './authRoutes/authRoutes'
import { projectRoutes } from "./projectRoutes/projectRoutes";


const router = Router()

router.use('/api/users', userRoutes)
router.use('/api/auth', authRoutes)
router.use('/api/projects', projectRoutes)

export { router }