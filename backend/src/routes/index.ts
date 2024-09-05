import { Router } from "express";
import { userRoutes } from "./userRoutes/userRoutes";

const router = Router()

router.use('/api/users', userRoutes)

export { router }