const { PrismaClient } = require('./prisma/generated/client');
const prisma = new PrismaClient();

async function main() {
    const config = await prisma.configuracao.findFirst();
    console.log('--- CONFIGURATION IN DATABASE ---');
    console.log(JSON.stringify(config, null, 2));
    await prisma.$disconnect();
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
