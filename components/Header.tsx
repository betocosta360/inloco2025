'use client';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                        {/* Logo placeholder */}
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-xl font-bold text-white">
                            IN
                        </div>
                        <span className="text-2xl font-bold text-blue-900">InLoco</span>
                    </div>

                    {/* Menu Desktop */}
                    <nav className="hidden items-center gap-8 md:flex">
                        <a href="#" className="font-medium text-gray-700 transition-colors hover:text-blue-600">
                            Início
                        </a>
                        <a href="#" className="font-medium text-gray-700 transition-colors hover:text-blue-600">
                            Quem Somos
                        </a>
                        <a href="#" className="font-medium text-gray-700 transition-colors hover:text-blue-600">
                            Cursos
                        </a>
                        <a href="#" className="font-medium text-gray-700 transition-colors hover:text-blue-600">
                            Equipe
                        </a>
                        <a href="#" className="font-medium text-gray-700 transition-colors hover:text-blue-600">
                            Depoimentos
                        </a>

                    </nav>

                    {/* Botão Hambúrguer Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="flex h-10 w-10 items-center justify-center text-gray-700 md:hidden focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Mobile Retrátil */}
            <div
                className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col container mx-auto px-4 py-4 space-y-4">
                    <a href="#" className="block font-medium text-gray-700 hover:text-blue-600">
                        Início
                    </a>
                    <a href="#" className="block font-medium text-gray-700 hover:text-blue-600">
                        Quem Somos
                    </a>
                    <a href="#" className="block font-medium text-gray-700 hover:text-blue-600">
                        Cursos
                    </a>
                    <a href="#" className="block font-medium text-gray-700 hover:text-blue-600">
                        Equipe
                    </a>
                    <a href="#" className="block font-medium text-gray-700 hover:text-blue-600">
                        Depoimentos
                    </a>

                </nav>
            </div>
        </header>
    );
}
