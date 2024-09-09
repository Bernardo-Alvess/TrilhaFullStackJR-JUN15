import { Cards } from "../components/cards";
import { Header } from "../components/header";

export function UserProjects() {
    return (
        <>
            <Header />
            <h1 className="text-white text-center text-2xl">SEUS PROJETOS</h1>
            <Cards />
        </>
    )
}