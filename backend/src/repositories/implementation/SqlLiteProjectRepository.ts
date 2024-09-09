import { Project } from "@entities/ProjectEntity";
import { IProjectRepository } from "@repositories/IProjectRepository";
import { prismaClient } from "./prismaClient";


export class SqlLiteProjectRepository implements IProjectRepository {
    async createProject(project: Project): Promise<void> {
        await prismaClient.project.create({
            data: project
        })
    }
    deleteProject(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUserProjects(user_id: string): Promise<Project[] | undefined> {
        throw new Error("Method not implemented.");
    }
    getProject(id: string): Promise<Project | undefined> {
        throw new Error("Method not implemented.");
    }

}