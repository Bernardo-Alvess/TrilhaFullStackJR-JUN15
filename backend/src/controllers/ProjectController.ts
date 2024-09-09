import { Request, Response } from "express";
import { Project } from "@entities/ProjectEntity";
import { SqlLiteProjectRepository } from "@repositories/implementation/SqlLiteProjectRepository";

class ProjectController {
    constructor(
        private projectRepository: SqlLiteProjectRepository
    ) { }

    async createProject(req: Request, res: Response) {
        const { title, description, link, user_id } = req.body
        const image = req.file


        if (image) {
            const project = new Project({ title, description, link, user_id, image_path: image.path, filename: image.filename });
            await this.projectRepository.createProject(project)

            return res.status(201)
        }

    }
}

const repository = new SqlLiteProjectRepository()
const projectController = new ProjectController(repository)

export { projectController }