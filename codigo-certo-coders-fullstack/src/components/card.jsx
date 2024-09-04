import { useLocation } from "react-router-dom";

export function Card() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div className="bg-white h-[150px] w-[150px] md:h-[330px] md:w-[330px] rounded-lg flex flex-col">
                {/* <img src="./assets/Telec2000.png" alt=" Card Image" className="w-full object-cover rounded-t-lg" /> */}
                <div className="bg-slate-500 w-full h-full rounded-t-lg">

                </div>
                <div className="flex  flex-col items-center pt-2">
                    <h1 className="font-bold">Nome do projeto</h1>
                    {path.startsWith('/projects') ? (
                        <button className="h-7 md:h-[50px] w-full bg-orange-500 hover:bg-orange-700 font-medium text-sm transition-colors">EDITAR</button>
                    ) : (<div></div>)}

                    <button className="h-7 md:h-[50px] w-full bg-red-coders hover:bg-red-600 transition-colors rounded-b-lg font-medium text-sm">ACESSAR</button>
                </div>
            </div>
        </>
    )

}