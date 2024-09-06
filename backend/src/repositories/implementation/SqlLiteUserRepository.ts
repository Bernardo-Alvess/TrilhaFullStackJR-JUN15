import { User } from "@entities/UserEntity";
import { IUserRepository } from "../IUserRepository";
import { prismaClient } from './prismaClient'

export class SqlLiteUserRepository implements IUserRepository {
    async createUser(user: User): Promise<void> {
        await prismaClient.user.create({ data: user })
    }
    //TODO implementação correta da funcão
    async getUser(id: string): Promise<User | undefined> {
        await prismaClient.user.findUnique({
            where: { id }
        })
    }

}