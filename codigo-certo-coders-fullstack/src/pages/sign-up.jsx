import { Header } from "../components/header";

export function SignUp() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <div className="w-full max-w-md p-8 text-white">
                    <h2 className="text-2xl font-semibold text-center">Criar Conta</h2>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label className="block">Nome</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Digite seu nome"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block">Senha</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-coders"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <button className="w-full px-4 py-2 font-semibold text-white bg-red-coders rounded-md hover:bg-red-700 transition-colors">
                            Criar Conta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}