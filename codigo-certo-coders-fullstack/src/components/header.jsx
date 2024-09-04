import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import { Modal } from "./user-modal";

export function Header() {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    return (
        <div className="grid grid-cols-12 w-full h-[60px] md:h-[80px] bg-red-coders items-center p-2 justify-between">
            <div className="col-span-6 text-white">
                <h1 className="font-medium text-md leading-relaxed">Codigo Certo Coders</h1>
            </div>
            <div className="col-span-6 flex justify-end">
                <CircleUserRound className="text-white size-6 md:size-10 cursor-pointer"
                    onClick={toggleModal} />
            </div>

            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    )
}