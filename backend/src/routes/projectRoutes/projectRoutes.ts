import { projectController } from "@controllers/ProjectController";
import { Router } from "express";
import multer from "multer";

const projectRoutes = Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage: storage });


projectRoutes.post('/', upload.single('image'), (req, res) => {
    projectController.createProject(req, res)
})

export { projectRoutes }
