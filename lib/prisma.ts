import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined,
    pool: Pool | undefined
};

if (!globalForPrisma.pool) {
    globalForPrisma.pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });
}

const adapter = new PrismaPg(globalForPrisma.pool);

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
        log: ['error', 'warn']
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
