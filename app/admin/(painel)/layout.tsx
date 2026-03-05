import Sidebar from "@/components/admin/Sidebar";
import { ToastProvider } from "@/components/admin/ToastProvider";
import { cookies } from "next/headers";
import AdminLayoutClient from "@/components/admin/AdminLayoutClient";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const role = cookieStore.get('userRole')?.value || 'ADMIN';

    return (
        <ToastProvider>
            <AdminLayoutClient
                sidebar={<Sidebar role={role} />}
            >
                {children}
            </AdminLayoutClient>
        </ToastProvider>
    );
}
