import { PrismaClient } from "@/generated/prisma/client"

const globalForPrisma = global as unknown as {
    prism : PrismaClient;
}
const prisma = globalForPrisma.prism || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prism = prisma;

export default prisma;