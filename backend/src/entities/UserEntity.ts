import { randomUUID } from "crypto";

interface IUserProps {
    id?: string;
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
        if (!props.id) {
            this.id = randomUUID()
        } else {
            this.id = props.id
        }
        this.name = props.name
        this.email = props.email
        this.password = props.password
    }
}