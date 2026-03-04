import Sidebar from "@/components/admin/Sidebar";
import { ToastProvider } from "@/components/admin/ToastProvider";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ToastProvider>
            <div className="flex min-h-screen bg-zinc-50 font-sans">
                <Sidebar />

                {/* Conteúdo Principal do Admin */}
                <main className="flex-1 overflow-auto">
                    <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-8 shadow-sm">
                        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Painel de Gerenciamento</h2>
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-zinc-400 font-medium">Versão 1.0.0</span>
                        </div>
                    </header>
                    <div className="p-8 max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </ToastProvider>
    );
}
