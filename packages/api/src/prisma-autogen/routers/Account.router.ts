import { protectedProcedure, publicProcedure, router } from '../../trpc'
import { AccountFindUniqueSchema } from '../schemas/findUniqueAccount.schema'
import { AccountFindFirstSchema } from '../schemas/findFirstAccount.schema'
import { AccountFindManySchema } from '../schemas/findManyAccount.schema'
import { AccountCreateOneSchema } from '../schemas/createOneAccount.schema'
import { AccountCreateManySchema } from '../schemas/createManyAccount.schema'
import { AccountDeleteOneSchema } from '../schemas/deleteOneAccount.schema'
import { AccountUpdateOneSchema } from '../schemas/updateOneAccount.schema'
import { AccountDeleteManySchema } from '../schemas/deleteManyAccount.schema'
import { AccountUpdateManySchema } from '../schemas/updateManyAccount.schema'
import { AccountUpsertSchema } from '../schemas/upsertOneAccount.schema'
import { AccountAggregateSchema } from '../schemas/aggregateAccount.schema'
import { AccountGroupBySchema } from '../schemas/groupByAccount.schema'

export const accountsRouter = router({
  aggregateAccount: publicProcedure.input(AccountAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateAccount = await ctx.prisma.account.aggregate(input)
    return aggregateAccount
  }),
  createManyAccount: protectedProcedure.input(AccountCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyAccount = await ctx.prisma.account.createMany(input)
    return createManyAccount
  }),
  createOneAccount: protectedProcedure.input(AccountCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneAccount = await ctx.prisma.account.create(input)
    return createOneAccount
  }),
  deleteManyAccount: protectedProcedure.input(AccountDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyAccount = await ctx.prisma.account.deleteMany(input)
    return deleteManyAccount
  }),
  deleteOneAccount: protectedProcedure.input(AccountDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneAccount = await ctx.prisma.account.delete(input)
    return deleteOneAccount
  }),
  findFirstAccount: publicProcedure.input(AccountFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstAccount = await ctx.prisma.account.findFirst(input)
    return findFirstAccount
  }),

  findManyAccount: publicProcedure.input(AccountFindManySchema).query(async ({ ctx, input }) => {
    const findManyAccount = await ctx.prisma.account.findMany(input)
    return findManyAccount
  }),
  findUniqueAccount: publicProcedure.input(AccountFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueAccount = await ctx.prisma.account.findUnique(input)
    return findUniqueAccount
  }),

  groupByAccount: publicProcedure.input(AccountGroupBySchema).query(async ({ ctx, input }) => {
    const groupByAccount = await ctx.prisma.account.groupBy(input)
    return groupByAccount
  }),
  updateManyAccount: protectedProcedure.input(AccountUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyAccount = await ctx.prisma.account.updateMany(input)
    return updateManyAccount
  }),
  updateOneAccount: protectedProcedure.input(AccountUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneAccount = await ctx.prisma.account.update(input)
    return updateOneAccount
  }),
  upsertOneAccount: protectedProcedure.input(AccountUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneAccount = await ctx.prisma.account.upsert(input)
    return upsertOneAccount
  }),
})
