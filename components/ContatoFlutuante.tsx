'use client';

export default function ContatoFlutuante() {
    // Número de WhatsApp de exemplo
    const whatsappNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os cursos.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300"
            aria-label="Contato via WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.652.581 1.221.756 1.393.843.174.087.275.073.376-.043.1-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 21.927c-1.618 0-3.14-.413-4.482-1.139l-4.992 1.31 1.332-4.869c-.838-1.385-1.316-3.007-1.316-4.735 0-5.243 4.257-9.5 9.5-9.5s9.5 4.257 9.5 9.5-4.257 9.5-9.5 9.5z" />
            </svg>
        </a>
    );
}
