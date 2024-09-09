import { User } from "@entities/UserEntity";

export interface IUserRepository {
    createUser(user: User): Promise<void>;
    getUser(email: string): Promise<User | undefined>
}