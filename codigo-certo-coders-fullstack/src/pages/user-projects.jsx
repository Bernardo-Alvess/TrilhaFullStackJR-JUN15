import { Link } from "react-router-dom";
import { Cards } from "../components/cards";
import { Header } from "../components/header";

export function UserProjects() {
    return (
        <>
            <Header />
            <h1 className="text-white text-center text-2xl">SEUS PROJETOS</h1>
            <Cards />
            <Link
                to='/create-project'
                className="bg-red-coders rounded-lg text-sm text-white font-bold p-2">
                CRIAR PROJETO
            </Link>
        </>
    )
}