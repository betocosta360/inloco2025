'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
    LayoutDashboard,
    Image as ImageIcon,
    BookOpen,
    Users,
    MessageSquare,
    Tag,
    GraduationCap,
    Wallet,
    UserCog,
    Settings,
    LogOut
} from 'lucide-react';

const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Banners', href: '/admin/banner', icon: ImageIcon },
    { name: 'Cursos', href: '/admin/cursos', icon: BookOpen },
    { name: 'Equipe', href: '/admin/equipe', icon: Users },
    { name: 'Depoimentos', href: '/admin/comentarios', icon: MessageSquare },
    { name: 'Promoções', href: '/admin/promocao', icon: Tag },
    { name: 'Alunos', href: '/admin/alunos', icon: GraduationCap },
    { name: 'Financeiro', href: '/admin/financeiro', icon: Wallet },
    { name: 'Administradores', href: '/admin/usuarios', icon: UserCog },
    { name: 'História e Institucional', href: '/admin/configuracao', icon: Settings },
];

export default function Sidebar() {
    const router = useRouter();
    const [adminName, setAdminName] = useState('Admin');
    const [adminEmail, setAdminEmail] = useState('');

    useEffect(() => {
        setAdminName(localStorage.getItem('adminName') || 'Admin');
        setAdminEmail(localStorage.getItem('adminEmail') || '');
    }, []);

    const initials = adminName.slice(0, 2).toUpperCase();

    const handleLogout = () => {
        localStorage.removeItem('adminName');
        localStorage.removeItem('adminEmail');
        router.push('/admin/login');
    };

    return (
        <aside className="w-64 bg-zinc-900 text-white min-h-screen p-6 shadow-xl flex flex-col">
            {/* Logo */}
            <div className="mb-10">
                <h1 className="text-2xl font-bold tracking-tighter text-zinc-100 flex items-center gap-2">
                    <span className="w-8 h-8 bg-zinc-100 rounded text-zinc-900 flex items-center justify-center font-black text-xs">IL</span>
                    Inloco Admin
                </h1>
            </div>

            {/* Navigation */}
            <nav className="space-y-1 flex-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-3 text-sm font-medium text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-zinc-100 transition-all duration-200 group"
                    >
                        <item.icon className="w-5 h-5 mr-3 group-hover:text-zinc-100 transition-colors" />
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Admin Info + Logout */}
            <div className="mt-auto pt-6 border-t border-zinc-800">
                {/* Admin card */}
                <div className="flex items-center gap-3 px-4 py-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-zinc-700 flex items-center justify-center text-xs font-black text-zinc-100 flex-shrink-0">
                        {initials}
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-bold text-zinc-100 truncate">{adminName}</p>
                        {adminEmail && (
                            <p className="text-xs text-zinc-500 truncate">{adminEmail}</p>
                        )}
                    </div>
                </div>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-3 text-sm font-medium text-rose-400 rounded-lg hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-200 group"
                >
                    <LogOut className="w-5 h-5 mr-3 group-hover:text-rose-300 transition-colors" />
                    Sair
                </button>
            </div>
        </aside>
    );
}
