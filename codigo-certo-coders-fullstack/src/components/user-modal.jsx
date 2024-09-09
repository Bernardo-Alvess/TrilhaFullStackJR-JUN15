import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Modal({ isOpen, onClose }) {

    if (!isOpen) return null;

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    let isUserLoggedIn = true

    return (
        <div
            className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 pt-10"
            onClick={handleClickOutside}
        >
            <div className="bg-white flex flex-col p-4 rounded shadow-lg h-[400px] w-[400px] " onClick={(e) => e.stopPropagation()}>
                <div className='w-full flex justify-between'>
                    <X onClick={onClose} className="text-red-500 cursor-pointer" />
                    <h1 className='font-bold'>username</h1>
                </div>

                {isUserLoggedIn ? (
                    <div className='flex flex-col text-white items-center justify-center h-full gap-1'>
                        <Link
                            to='/'
                            className='p-4 bg-black w-full rounded-lg text-center'>
                            Home
                        </Link>
                        <Link
                            to='/user-projects'
                            className='p-4 bg-black w-full rounded-lg text-center'
                        >Ver seus projetos</Link>
                        <Link
                            to='/logout'
                            className='p-4 bg-black w-full rounded-lg text-center'
                        >Sair</Link>
                    </div>
                ) : (
                    <Link
                        to='/login'>Fazer login</Link>
                )}
            </div>
        </div>

    );
}
