import { User } from "@entities/UserEntity";
import { IUserRepository } from "../IUserRepository";

export class SqlLiteUserRepository implements IUserRepository {
    createUser(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getUser(id: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }

}