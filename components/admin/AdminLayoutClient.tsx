'use client';

import { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/actions";

interface AdminLayoutClientProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
}

export default function AdminLayoutClient({ children, sidebar }: AdminLayoutClientProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleLogout = async () => {
        await logout();
        localStorage.removeItem('adminName');
        localStorage.removeItem('adminEmail');
        localStorage.removeItem('userRole');
        router.push('/admin/login');
    };

    return (
        <div className="flex min-h-screen bg-zinc-50 font-sans relative">
            {/* Overlay para mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar com controle de visibilidade mobile */}
            <div className={`
                fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {sidebar}
            </div>

            {/* Conteúdo Principal do Admin */}
            <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
                <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-4 lg:px-8 shadow-sm shrink-0">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 hover:bg-zinc-100 rounded-lg lg:hidden text-zinc-600 transition-colors"
                        >
                            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest hidden sm:block">Painel de Gerenciamento</h2>
                    </div>
                    <div className="flex items-center gap-6">
                        {mounted && (
                            <div className="hidden md:flex flex-col items-end">
                                <span className="text-xs font-bold text-zinc-900 leading-none">
                                    {currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                </span>
                                <span className="text-[10px] text-zinc-400 font-medium mt-1 uppercase tracking-tighter">
                                    {currentTime.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })}
                                </span>
                            </div>
                        )}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-rose-100"
                        >
                            <LogOut size={16} />
                            <span>Sair</span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-4 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
