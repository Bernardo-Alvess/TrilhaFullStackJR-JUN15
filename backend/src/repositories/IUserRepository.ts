import { User } from "@entities/UserEntity";

export interface IUserRepository {
    createUser(user: User): Promise<void>;
    getUser(id: string): Promise<User | undefined>
}