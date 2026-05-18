import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'warn', 'error'] : ['error'],
    })
  }
  return globalForPrisma.prisma
}

function createVercelPrisma(): PrismaClient {
  const handler: ProxyHandler<PrismaClient> = {
    get(_target, prop: string) {
      if (prop === '$connect' || prop === '$disconnect') {
        return async () => {}
      }
      if (prop === '$on' || prop === '$use' || prop === '$extends') {
        return () => createVercelPrisma()
      }
      if (prop === '$transaction') {
        return async () => { throw new Error('[KAIROS] 数据库尚未迁移到 Vercel 云端，该功能暂不可用。') }
      }
      return async () => {
        if (prop === 'count') return 0
        if (prop === 'findMany' || prop === 'groupBy') return []
        if (prop === 'findFirst' || prop === 'findUnique' || prop === 'findFirstOrThrow' || prop === 'findUniqueOrThrow') return null
        if (prop === 'create' || prop === 'createMany' || prop === 'update' || prop === 'updateMany' || prop === 'upsert') throw new Error('[KAIROS] 数据库尚未迁移到 Vercel 云端，无法写入数据。')
        if (prop === 'delete' || prop === 'deleteMany') throw new Error('[KAIROS] 数据库尚未迁移到 Vercel 云端，无法删除数据。')
        return undefined
      }
    },
  }
  return new Proxy({} as PrismaClient, handler)
}

const prisma: PrismaClient = process.env.VERCEL
  ? createVercelPrisma()
  : createPrisma()

export default prisma