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
    LogOut,
    Calculator
} from 'lucide-react';

const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Alunos', href: '/admin/alunos', icon: GraduationCap },
    { name: 'Administradores', href: '/admin/usuarios', icon: UserCog },
    { name: 'Banners', href: '/admin/banner', icon: ImageIcon },
    { name: 'Cursos', href: '/admin/cursos', icon: BookOpen },
    { name: 'Depoimentos', href: '/admin/comentarios', icon: MessageSquare },
    { name: 'Despesas', href: '/admin/despesas', icon: Calculator },
    { name: 'Equipe', href: '/admin/equipe', icon: Users },
    { name: 'Mensalidades', href: '/admin/financeiro', icon: Wallet },
    { name: 'História e Institucional', href: '/admin/configuracao', icon: Settings },
    { name: 'Professores', href: '/admin/professores', icon: UserCog },
    { name: 'Promoções', href: '/admin/promocao', icon: Tag },
    { name: 'Turmas', href: '/admin/turmas', icon: Users },
];

export default function Sidebar({
    role: initialRole,
    name: initialName,
    email: initialEmail
}: {
    role?: string;
    name?: string;
    email?: string;
}) {
    const router = useRouter();
    const [adminName, setAdminName] = useState(initialName || 'Admin');
    const [adminEmail, setAdminEmail] = useState(initialEmail || '');
    const [userRole, setUserRole] = useState(initialRole || 'ADMIN');

    useEffect(() => {
        if (!initialName) setAdminName(localStorage.getItem('adminName') || 'Admin');
        if (!initialEmail) setAdminEmail(localStorage.getItem('adminEmail') || '');
        if (!initialRole) {
            setUserRole(localStorage.getItem('userRole') || 'ADMIN');
        }
    }, [initialRole, initialName, initialEmail]);

    const initials = adminName.slice(0, 2).toUpperCase();

    // Filter and Sort menu items
    // Dashboard stays first, others sorted alphabetically
    const dashboardItem = menuItems.find(item => item.name === 'Dashboard');
    const otherItems = menuItems.filter(item => item.name !== 'Dashboard');

    // Role-based filter
    const visibleItems = userRole === 'PROFESSOR'
        ? [dashboardItem, ...otherItems.filter(item => ['Turmas', 'Alunos'].includes(item.name))]
        : [dashboardItem, ...otherItems];

    // Sort the "other items" part while keeping Dashboard at top if it's there
    const sortedMenu = visibleItems.filter(Boolean).sort((a, b) => {
        if (a!.name === 'Dashboard') return -1;
        if (b!.name === 'Dashboard') return 1;
        return a!.name.localeCompare(b!.name);
    });

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
                {sortedMenu.map((item) => (
                    item && (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center px-4 py-3 text-sm font-medium text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-zinc-100 transition-all duration-200 group"
                        >
                            <item.icon className="w-5 h-5 mr-3 group-hover:text-zinc-100 transition-colors" />
                            {item.name}
                        </Link>
                    )
                ))}
            </nav>

            {/* Admin Info */}
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
            </div>
        </aside>
    );
}
