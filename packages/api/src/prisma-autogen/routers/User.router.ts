import { protectedProcedure, publicProcedure, router } from '../../trpc'
import { UserFindUniqueSchema } from '../schemas/findUniqueUser.schema'
import { UserFindFirstSchema } from '../schemas/findFirstUser.schema'
import { UserFindManySchema } from '../schemas/findManyUser.schema'
import { UserCreateOneSchema } from '../schemas/createOneUser.schema'
import { UserCreateManySchema } from '../schemas/createManyUser.schema'
import { UserDeleteOneSchema } from '../schemas/deleteOneUser.schema'
import { UserUpdateOneSchema } from '../schemas/updateOneUser.schema'
import { UserDeleteManySchema } from '../schemas/deleteManyUser.schema'
import { UserUpdateManySchema } from '../schemas/updateManyUser.schema'
import { UserUpsertSchema } from '../schemas/upsertOneUser.schema'
import { UserAggregateSchema } from '../schemas/aggregateUser.schema'
import { UserGroupBySchema } from '../schemas/groupByUser.schema'

export const usersRouter = router({
  aggregateUser: publicProcedure.input(UserAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateUser = await ctx.prisma.user.aggregate(input)
    return aggregateUser
  }),
  createManyUser: protectedProcedure.input(UserCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyUser = await ctx.prisma.user.createMany(input)
    return createManyUser
  }),
  createOneUser: protectedProcedure.input(UserCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneUser = await ctx.prisma.user.create(input)
    return createOneUser
  }),
  deleteManyUser: protectedProcedure.input(UserDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyUser = await ctx.prisma.user.deleteMany(input)
    return deleteManyUser
  }),
  deleteOneUser: protectedProcedure.input(UserDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneUser = await ctx.prisma.user.delete(input)
    return deleteOneUser
  }),
  findFirstUser: publicProcedure.input(UserFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstUser = await ctx.prisma.user.findFirst(input)
    return findFirstUser
  }),
  findFirstUserOrThrow: publicProcedure.input(UserFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstUserOrThrow = await ctx.prisma.user.findFirstOrThrow(input)
    return findFirstUserOrThrow
  }),
  findManyUser: publicProcedure.input(UserFindManySchema).query(async ({ ctx, input }) => {
    const findManyUser = await ctx.prisma.user.findMany(input)
    return findManyUser
  }),
  findUniqueUser: publicProcedure.input(UserFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueUser = await ctx.prisma.user.findUnique(input)
    return findUniqueUser
  }),
  findUniqueUserOrThrow: publicProcedure.input(UserFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueUserOrThrow = await ctx.prisma.user.findUniqueOrThrow(input)
    return findUniqueUserOrThrow
  }),
  //   groupByUser: publicProcedure.input(UserGroupBySchema).query(async ({ ctx, input }) => {
  //     const groupByUser = await ctx.prisma.user.groupBy(input)
  //     return groupByUser
  //   }),
  updateManyUser: protectedProcedure.input(UserUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyUser = await ctx.prisma.user.updateMany(input)
    return updateManyUser
  }),
  updateOneUser: protectedProcedure.input(UserUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneUser = await ctx.prisma.user.update(input)
    return updateOneUser
  }),
  upsertOneUser: protectedProcedure.input(UserUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneUser = await ctx.prisma.user.upsert(input)
    return upsertOneUser
  }),
})
