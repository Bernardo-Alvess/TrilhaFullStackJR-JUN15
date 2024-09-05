import { useState } from "react";
import { Header } from "../components/header";
import { Camera } from "lucide-react";

export function EditProjet() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setSelectedImage(file)

        const url = URL.createObjectURL(file)
        setImagePreview(url)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const triggerFileInput = () => {
        document.getElementById('file-input').click();
    };

    return (
        <div>
            <Header />
            <div className="text-white max-w-[500px] p-3 rounded-lg flex flex-col justify-center items-center m-auto mt-10 gap-2">
                <h1 className="font-bold text-2xl">Editar Projeto</h1>
                <form
                    className="flex flex-col md:flex-row gap-3 mt-5 w-full"
                    id='edit-form'>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1 w-full">
                            <label>Nome do Projeto:</label>
                            <input
                                type="text"
                                placeholder="Nome do projeto"
                                className="p-2 focus:outline-none focus:ring-2 focus:ring-red-coders rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label>Descrição do Projeto:</label>
                            <textarea
                                placeholder="Descrição do projeto"
                                className="p-2 focus:outline-none focus:ring-2 focus:ring-red-coders rounded-lg" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label>Link do Projeto:</label>
                            <input
                                type="text"
                                placeholder="Link do projeto"
                                className="p-2 outline-none focus:ring-2 focus:ring-red-coders rounded-lg" />
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
                            accept="image/*"
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
                    form="edit-form"
                    value="SALVAR"
                    className="bg-red-coders p-2 rounded-lg w-full max-h-[40px] text-sm font-medium cursor-pointer hover:bg-red-600 transition-colors"

                />
                <input
                    type="submit"
                    form="edit-form"
                    value="EXCLUIR PROJETO"
                    className="bg-red-900 p-2 rounded-lg w-full max-h-[40px] text-sm font-medium cursor-pointer hover:bg-red-700 transition-colors text-gray-400 hover:text-gray-800"

                />
            </div>
        </div>
    )
}