import Cookies from "universal-cookie"
import { Header } from "../components/header"
import { loginUser } from "../http/login-user"
import { useNavigate } from "react-router-dom"

export function Login() {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        }

        const cookie = new Cookies()

        try {
            const { token } = await loginUser({ ...data })
            const expirationDate = 15 * 24 * 60 * 1000
            cookie.set('jwt-token', token, { maxAge: expirationDate })
            navigate('/')

        } catch (e) {
            console.error(e)
        }

    }

    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center h-full bg-black">
                <div className="w-full max-w-md p-8 bg-inherit text-white">
                    <h2 className="text-2xl font-semibold text-center">Login</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-4">
                        <div className="mb-4">
                            <label className="block">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-coders text-black"
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block">Senha</label>
                            <input
                                type="password"
                                name='password'
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-coders text-black"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-semibold text-white bg-red-coders rounded-md hover:bg-red-700 transition-colors">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
