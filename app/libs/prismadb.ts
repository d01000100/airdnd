import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

// Next js hot reloading could make a lot of prisma clients
// We assign the client to a global variable and make a check
// if it exists to avoid having multiple connections
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client;