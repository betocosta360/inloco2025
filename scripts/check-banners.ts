import { PrismaClient } from '../prisma/generated/client';
const prisma = new PrismaClient();

async function main() {
    const banners = await prisma.banner.findMany();
    console.log(JSON.stringify(banners, null, 2));
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
