import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { ExternalLink } from "lucide-react";

export function Project() {
    return (
        <div className="h-screen flex flex-col md:gap-20">
            <Header />
            <div className="text-white flex justify-center items-center gap-10 flex-wrap">
                <div className="bg-white h-[150px] w-screen md:h-[330px] md:w-[330px] md:rounded-lg" />
                <div className="flex flex-col gap-2 p-2">
                    <h1 className="font-bold text-xl">Lorem ipsum</h1>
                    <p className="leading-relaxed max-w-[500px] font-medium text-gray-400">
                        O projeto "Habit Tracker" no GitHub é um aplicativo desenvolvido com React e Firebase para ajudar os usuários a criar e acompanhar hábitos diários. Com uma interface simples e moderna, construída com Tailwind CSS, o usuário pode adicionar, editar e remover hábitos, além de monitorar o progresso de cada um ao longo do tempo.

                        Para gerenciar dados e autenticação, o projeto utiliza Firebase Authentication e Firestore, garantindo uma experiência sincronizada e segura. O código é bem organizado, com o uso de React Hooks para facilitar o gerenciamento de estado e efeitos colaterais, tornando o projeto uma excelente referência para desenvolvedores que desejam aprender sobre a integração entre React e Firebase.

                        Além disso, o projeto é de código aberto, aceitando contribuições para melhorias e novas funcionalidades. Ideal para quem busca melhorar suas habilidades em desenvolvimento frontend e backend, enquanto cria uma solução útil para o dia a dia.
                    </p>
                    <div className="flex lg:justify-end">
                        <Link
                            to="https://github.com/Bernardo-Alvess/TrilhaFullStackJR-JUN15"
                            className="text-center p-2 w-fit bg-red-coders hover:bg-red-700 transition-colors rounded-lg font-medium text-sm flex items-center gap-2">
                            LINK DO PROJETO
                            <ExternalLink className="text-black" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}