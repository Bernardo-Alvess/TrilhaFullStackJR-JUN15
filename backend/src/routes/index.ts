import { Router } from "express";
import { userRoutes } from "./userRoutes/user-routes";

const router = Router()

router.use('/api/users', userRoutes)

export { router }