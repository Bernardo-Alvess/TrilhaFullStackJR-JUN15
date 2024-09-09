import { randomUUID } from "crypto";

interface IProjectProps {
    title: string;
    description: string;
    image_path: string;
    filename: string;
    user_id: string;
    link: string;
}

export class Project {
    public readonly id;
    public title: string;
    public description: string;
    public link: String;
    public readonly user_id: string;
    public image_path: string;
    public filename: string;

    constructor(props: IProjectProps) {
        this.id = randomUUID();
        this.title = props.title;
        this.description = props.description;
        this.user_id = props.user_id;
        this.link = props.link;
        this.image_path = props.image_path;
        this.filename = props.filename
    }
}