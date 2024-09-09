import { Project } from "@entities/ProjectEntity";

export interface IProjectRepository {
    createProject(project: Project): Promise<void>
    deleteProject(id: string): Promise<void>;
    getUserProjects(user_id: string): Promise<Project[] | undefined>
    getProject(id: string): Promise<Project | undefined>
}