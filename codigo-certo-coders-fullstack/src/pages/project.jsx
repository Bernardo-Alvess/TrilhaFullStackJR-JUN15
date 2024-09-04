import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { ExternalLink } from "lucide-react";

export function Project() {
    return (
        <div className="h-screen flex flex-col md:gap-28">
            <Header />
            <div className="text-white flex justify-center items-center gap-10 flex-wrap">
                <div className="bg-white h-[150px] w-screen md:h-[330px] md:w-[330px] md:rounded-lg" />
                <div className="flex flex-col gap-2 p-2">
                    <h1 className="font-bold text-xl">Lorem ipsum</h1>
                    <p className="leading-relaxed max-w-[500px] font-medium text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, obcaecati non laboriosam molestias ab officiis magnam nihil quod earum consectetur. Magni sit quisquam recusandae officia illum sunt cupiditate incidunt reprehenderit.
                    </p>
                    <Link
                        to="https://github.com/Bernardo-Alvess/TrilhaFullStackJR-JUN15"
                        className="text-center p-2 w-fit bg-red-coders hover:bg-red-700 transition-colors rounded-lg font-medium text-sm flex items-center gap-2">
                        LINK DO PROJETO
                        <ExternalLink className="text-black" />
                    </Link>
                </div>

            </div>
        </div>
    )
}