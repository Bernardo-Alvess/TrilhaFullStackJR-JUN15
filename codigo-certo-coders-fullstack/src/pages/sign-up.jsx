import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { createUser } from "../http/create-user";
import Cookies from 'universal-cookie'

export function SignUp() {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const cookie = new Cookies()

        try {
            const { token } = await createUser({ ...data })
            const expirationDate = 15 * 24 * 60 * 60 * 1000;
            cookie.set('jwt-token', token, { path: '/', maxAge: expirationDate })
            navigate('/')
        } catch (e) {
            console.error(e)
        }

        console.log(data)
    }


    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <div className="w-full max-w-md p-8 text-white">
                    <h2 className="text-2xl font-semibold text-center">Criar Conta</h2>
                    <form
                        className="mt-4"
                        onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block">Nome:</label>
                            <input
                                type="text"
                                name='name'
                                required
                                className="text-black w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Digite seu nome"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Email:</label>
                            <input
                                type="email"
                                name='email'
                                required
                                className="text-black w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block">Senha:</label>
                            <input
                                type="password"
                                name='password'
                                required
                                className="text-black w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-coders"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block">Confirmar senha:</label>
                            <input
                                type="password"
                                name='confirm-password'
                                required
                                className="text-black w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-coders"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <button
                            type='submit'
                            className="w-full px-4 py-2 font-semibold text-white bg-red-coders rounded-md hover:bg-red-700 transition-colors">
                            Criar Conta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}