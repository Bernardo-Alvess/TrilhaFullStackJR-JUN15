import { Card } from "./card";

export function Cards() {
    return (
        <div className=" w-full h-full p-2 flex items-center justify-center">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-center gap-2">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}