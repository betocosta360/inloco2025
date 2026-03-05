const { PrismaClient } = require('./prisma/generated/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Updating TikTok URL...');
    const result = await prisma.configuracao.upsert({
        where: { id: 'singleton' },
        update: { tiktok: 'https://tiktok.com/@inloco' },
        create: {
            id: 'singleton',
            historia: 'História placeholder',
            missao: 'Missão placeholder',
            visao: 'Visão placeholder',
            valores: 'Valores placeholder',
            tiktok: 'https://tiktok.com/@inloco'
        }
    });
    console.log('Result:', JSON.stringify(result, null, 2));
    await prisma.$disconnect();
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
