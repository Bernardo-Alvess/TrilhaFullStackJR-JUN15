import { useState } from "react";
import { Header } from "../components/header";
import { Camera } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

export function CreateProject() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setSelectedImage(file)

        const url = URL.createObjectURL(file)
        setImagePreview(url)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();

        formData.append('title', e.target.name.value);
        formData.append('description', e.target.description.value);
        formData.append('link', e.target.link.value);
        formData.append('image', selectedImage);

        const cookies = new Cookies()

        const jwtCookie = cookies.get('jwt-token')

        const user_id = jwtDecode(jwtCookie).sub
        console.log(user_id)
        formData.append('userId', user_id)
        await fetch('http://localhost:3000/api/projects', {
            method: 'POST',
            body: formData
        })

    }

    const triggerFileInput = () => {
        document.getElementById('file-input').click();
    };

    return (
        <div>
            <Header />
            <div className="text-white max-w-[500px] p-3 rounded-lg flex flex-col justify-center items-center m-auto mt-10 gap-2">
                <h1 className="font-bold text-2xl">Criar Projeto</h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-3 mt-5 w-full"
                    id='create-form'>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 w-full">
                            <label>Nome do Projeto:</label>
                            <input
                                type="text"
                                name='title'
                                required
                                placeholder="Nome do projeto"
                                className="p-2 focus:outline-none focus:ring-2 focus:ring-red-coders rounded-lg text-black" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label>Descrição do Projeto:</label>
                            <textarea
                                placeholder="Descrição do projeto"
                                name='description'
                                required
                                className="p-2 focus:outline-none focus:ring-2 focus:ring-red-coders rounded-lg text-black" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label>Link do Projeto:</label>
                            <input
                                type="text"
                                name='link'
                                required
                                placeholder="Link do projeto"
                                className="p-2 outline-none focus:ring-2 focus:ring-red-coders rounded-lg text-black" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <button
                            type="button"
                            onClick={triggerFileInput}
                            className="bg-red-coders text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none text-sm font-medium transition-colors">
                            ESCOLHER IMAGEM
                        </button>
                        <input
                            type="file"
                            name='image'
                            accept="image/*"
                            required
                            onChange={handleImageChange}
                            className="hidden"
                            id="file-input" />
                        {imagePreview ? (
                            <div className="p-2 flex flex-col justify-center items-center">
                                <img
                                    src={imagePreview}
                                    alt='prévia'
                                    className="border border-white w-[330px] h-[330px] rounded-lg" />
                            </div>
                        ) : (
                            <div className="max-w-[330px] w-[330px] h-[330px] bg-white rounded-lg flex justify-center items-center m-auto my-2">
                                <Camera className="text-black size-1/3" />
                            </div>
                        )}
                    </div>
                </form>
                <input
                    type="submit"
                    form="create-form"
                    value="CRIAR"
                    className="bg-red-coders p-2 rounded-lg w-full max-h-[40px] text-sm font-medium cursor-pointer hover:bg-red-600 transition-colors"

                />
            </div>
        </div>
    )
}