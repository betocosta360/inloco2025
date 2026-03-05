'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react';

export default function FinanceSummary({ stats }: { stats: any }) {
    const data = [
        { name: 'Mensalidades', valor: stats.totalArrecadado, fill: '#10b981' },
        { name: 'Despesas', valor: stats.totalDespesas, fill: '#ef4444' },
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Arrecadado */}
                <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Arrecadado</p>
                        <p className="text-2xl font-black text-emerald-600 mt-1">R$ {stats.totalArrecadado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <ArrowUpCircle className="w-6 h-6" />
                    </div>
                </div>

                {/* Despesas */}
                <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Despesas</p>
                        <p className="text-2xl font-black text-rose-600 mt-1">R$ {stats.totalDespesas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                        <ArrowDownCircle className="w-6 h-6" />
                    </div>
                </div>

                {/* Saldo */}
                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-xl flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Saldo Geral</p>
                        <p className={`text-2xl font-black mt-1 ${stats.saldo >= 0 ? 'text-zinc-100' : 'text-rose-400'}`}>
                            R$ {stats.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-100">
                        <Wallet className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-bold text-zinc-800">Comparativo Financeiro</h3>
                    <div className="flex items-center gap-4 text-xs font-medium">
                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-emerald-500 rounded-sm"></div> Receita</div>
                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-rose-500 rounded-sm"></div> Despesas</div>
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                tickFormatter={(v) => `R$ ${v}`}
                            />
                            <Tooltip
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                            />
                            <Bar
                                dataKey="valor"
                                radius={[6, 6, 0, 0]}
                                barSize={60}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
