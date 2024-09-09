import { User } from "@entities/UserEntity";
import { IUserRepository } from "../IUserRepository";
import { prismaClient } from './prismaClient'

export class SqlLiteUserRepository implements IUserRepository {
    async createUser(user: User): Promise<void> {
        await prismaClient.user.create({ data: user })
    }

    async getUser(email: string): Promise<User | undefined> {
        const data = await prismaClient.user.findUnique({
            where: { email }
        })

        if (data) return new User({ ...data })

        return undefined
    }

}