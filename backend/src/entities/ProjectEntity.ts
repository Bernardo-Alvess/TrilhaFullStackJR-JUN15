import { randomUUID } from "crypto";

interface IProjectProps {
    title: string;
    description: string;
    image_url: string;
    user_id: string;
    image: string;
}

export class Project {
    private readonly id;
    public title: string;;
    public description: string;
    public readonly user_id: string;
    public image_url: string;

    constructor(props: IProjectProps) {
        this.id = randomUUID();
        this.title = props.title;
        this.description = props.description;
        this.user_id = props.user_id;
        this.image_url = props.image_url;
    }
}