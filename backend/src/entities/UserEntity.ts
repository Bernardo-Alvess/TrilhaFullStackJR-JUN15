import { randomUUID } from "crypto";

interface IUserProps {
    name: string,
    email: string,
    password: string
}

export class User {
    public readonly id;
    public name: string;
    public email: string;
    public password: string;

    constructor(props: IUserProps) {
        this.id = randomUUID()
        this.name = props.name
        this.email = props.email
        this.password = props.password
    }
}