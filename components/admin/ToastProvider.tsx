'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type ToastType = 'success' | 'error' | 'loading' | 'info';

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

interface ToastContextValue {
    toast: {
        success: (msg: string) => void;
        error: (msg: string) => void;
        loading: (msg: string) => number;
        info: (msg: string) => void;
        dismiss: (id: number) => void;
    };
}

const ToastCtx = createContext<ToastContextValue | null>(null);

let counter = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const add = useCallback((message: string, type: ToastType, duration = 4000) => {
        const id = ++counter;
        setToasts(prev => [...prev, { id, message, type }]);
        if (type !== 'loading') {
            setTimeout(() => remove(id), duration);
        }
        return id;
    }, []);

    const remove = useCallback((id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    const toast = {
        success: (msg: string) => add(msg, 'success'),
        error: (msg: string) => add(msg, 'error', 6000),
        loading: (msg: string) => add(msg, 'loading'),
        info: (msg: string) => add(msg, 'info'),
        dismiss: remove,
    };

    const icons: Record<ToastType, string> = {
        success: '✓',
        error: '✕',
        loading: '⟳',
        info: 'i',
    };

    const colors: Record<ToastType, string> = {
        success: 'bg-emerald-500',
        error: 'bg-red-500',
        loading: 'bg-zinc-700',
        info: 'bg-blue-500',
    };

    return (
        <ToastCtx.Provider value={{ toast }}>
            {children}
            {/* Toast Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
                {toasts.map(t => (
                    <div
                        key={t.id}
                        className="flex items-center gap-3 bg-zinc-900 text-white px-5 py-4 rounded-2xl shadow-2xl shadow-black/30 min-w-[280px] max-w-sm pointer-events-auto animate-in slide-in-from-right-8 duration-300"
                    >
                        <span className={`w-7 h-7 rounded-xl ${colors[t.type]} flex items-center justify-center text-white text-sm font-black flex-shrink-0 ${t.type === 'loading' ? 'animate-spin' : ''}`}>
                            {icons[t.type]}
                        </span>
                        <p className="text-sm font-medium leading-snug">{t.message}</p>
                        <button
                            onClick={() => remove(t.id)}
                            className="ml-auto text-zinc-500 hover:text-white transition-colors text-lg leading-none"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </ToastCtx.Provider>
    );
}

export function useToast() {
    const ctx = useContext(ToastCtx);
    if (!ctx) throw new Error('useToast must be inside ToastProvider');
    return ctx.toast;
}
