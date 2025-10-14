import { PrismaClient } from "@prisma/client";

// Type-safe global variable
const globalForPrisma = global as unknown as { prisma?: InstanceType<typeof PrismaClient> };

// Create or reuse Prisma client
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

// Assign to global for hot-reload dev
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
