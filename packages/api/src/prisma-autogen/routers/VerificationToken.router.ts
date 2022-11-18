import { protectedProcedure, publicProcedure, router } from '../../trpc'
import { VerificationTokenFindUniqueSchema } from '../schemas/findUniqueVerificationToken.schema'
import { VerificationTokenFindFirstSchema } from '../schemas/findFirstVerificationToken.schema'
import { VerificationTokenFindManySchema } from '../schemas/findManyVerificationToken.schema'
import { VerificationTokenCreateOneSchema } from '../schemas/createOneVerificationToken.schema'
import { VerificationTokenCreateManySchema } from '../schemas/createManyVerificationToken.schema'
import { VerificationTokenDeleteOneSchema } from '../schemas/deleteOneVerificationToken.schema'
import { VerificationTokenUpdateOneSchema } from '../schemas/updateOneVerificationToken.schema'
import { VerificationTokenDeleteManySchema } from '../schemas/deleteManyVerificationToken.schema'
import { VerificationTokenUpdateManySchema } from '../schemas/updateManyVerificationToken.schema'
import { VerificationTokenUpsertSchema } from '../schemas/upsertOneVerificationToken.schema'
import { VerificationTokenAggregateSchema } from '../schemas/aggregateVerificationToken.schema'
import { VerificationTokenGroupBySchema } from '../schemas/groupByVerificationToken.schema'

export const verificationtokensRouter = router({
  aggregateVerificationToken: publicProcedure.input(VerificationTokenAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateVerificationToken = await ctx.prisma.verificationToken.aggregate(input)
    return aggregateVerificationToken
  }),
  createManyVerificationToken: protectedProcedure
    .input(VerificationTokenCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyVerificationToken = await ctx.prisma.verificationToken.createMany(input)
      return createManyVerificationToken
    }),
  createOneVerificationToken: protectedProcedure
    .input(VerificationTokenCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneVerificationToken = await ctx.prisma.verificationToken.create(input)
      return createOneVerificationToken
    }),
  deleteManyVerificationToken: protectedProcedure
    .input(VerificationTokenDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyVerificationToken = await ctx.prisma.verificationToken.deleteMany(input)
      return deleteManyVerificationToken
    }),
  deleteOneVerificationToken: protectedProcedure
    .input(VerificationTokenDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneVerificationToken = await ctx.prisma.verificationToken.delete(input)
      return deleteOneVerificationToken
    }),
  findFirstVerificationToken: publicProcedure.input(VerificationTokenFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstVerificationToken = await ctx.prisma.verificationToken.findFirst(input)
    return findFirstVerificationToken
  }),
  findFirstVerificationTokenOrThrow: publicProcedure
    .input(VerificationTokenFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVerificationTokenOrThrow = await ctx.prisma.verificationToken.findFirstOrThrow(input)
      return findFirstVerificationTokenOrThrow
    }),
  findManyVerificationToken: publicProcedure.input(VerificationTokenFindManySchema).query(async ({ ctx, input }) => {
    const findManyVerificationToken = await ctx.prisma.verificationToken.findMany(input)
    return findManyVerificationToken
  }),
  findUniqueVerificationToken: publicProcedure
    .input(VerificationTokenFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVerificationToken = await ctx.prisma.verificationToken.findUnique(input)
      return findUniqueVerificationToken
    }),
  findUniqueVerificationTokenOrThrow: publicProcedure
    .input(VerificationTokenFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVerificationTokenOrThrow = await ctx.prisma.verificationToken.findUniqueOrThrow(input)
      return findUniqueVerificationTokenOrThrow
    }),

  updateManyVerificationToken: protectedProcedure
    .input(VerificationTokenUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyVerificationToken = await ctx.prisma.verificationToken.updateMany(input)
      return updateManyVerificationToken
    }),
  updateOneVerificationToken: protectedProcedure
    .input(VerificationTokenUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneVerificationToken = await ctx.prisma.verificationToken.update(input)
      return updateOneVerificationToken
    }),
  upsertOneVerificationToken: protectedProcedure
    .input(VerificationTokenUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneVerificationToken = await ctx.prisma.verificationToken.upsert(input)
      return upsertOneVerificationToken
    }),
})
