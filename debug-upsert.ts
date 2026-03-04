import { prisma } from './lib/prisma';

async function run() {
    console.log("Starting debug script...");
    try {
        const res = await prisma.configuracao.upsert({
            where: { id: 'singleton' },
            update: { historia: 'test history update' },
            create: {
                id: 'singleton',
                historia: 'test history',
                missao: 'test mission',
                visao: 'test vision',
                valores: 'test values'
            }
        });
        console.log("Success! Result:", res);
    } catch (e: any) {
        console.error("CRITICAL FAILURE:", e.message);
        if (e.code) console.error("Error Code:", e.code);
        if (e.meta) console.error("Error Meta:", e.meta);
    } finally {
        process.exit(0);
    }
}

run();
