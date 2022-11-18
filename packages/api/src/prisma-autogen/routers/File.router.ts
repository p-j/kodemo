import { protectedProcedure, publicProcedure, router } from '../../trpc'
import { FileFindUniqueSchema } from '../schemas/findUniqueFile.schema'
import { FileFindFirstSchema } from '../schemas/findFirstFile.schema'
import { FileFindManySchema } from '../schemas/findManyFile.schema'
import { FileCreateOneSchema } from '../schemas/createOneFile.schema'
import { FileCreateManySchema } from '../schemas/createManyFile.schema'
import { FileDeleteOneSchema } from '../schemas/deleteOneFile.schema'
import { FileUpdateOneSchema } from '../schemas/updateOneFile.schema'
import { FileDeleteManySchema } from '../schemas/deleteManyFile.schema'
import { FileUpdateManySchema } from '../schemas/updateManyFile.schema'
import { FileUpsertSchema } from '../schemas/upsertOneFile.schema'
import { FileAggregateSchema } from '../schemas/aggregateFile.schema'
import { FileGroupBySchema } from '../schemas/groupByFile.schema'

export const filesRouter = router({
  aggregateFile: publicProcedure.input(FileAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateFile = await ctx.prisma.file.aggregate(input)
    return aggregateFile
  }),
  createManyFile: protectedProcedure.input(FileCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyFile = await ctx.prisma.file.createMany(input)
    return createManyFile
  }),
  createOneFile: protectedProcedure.input(FileCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneFile = await ctx.prisma.file.create(input)
    return createOneFile
  }),
  deleteManyFile: protectedProcedure.input(FileDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyFile = await ctx.prisma.file.deleteMany(input)
    return deleteManyFile
  }),
  deleteOneFile: protectedProcedure.input(FileDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneFile = await ctx.prisma.file.delete(input)
    return deleteOneFile
  }),
  findFirstFile: publicProcedure.input(FileFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstFile = await ctx.prisma.file.findFirst(input)
    return findFirstFile
  }),
  findFirstFileOrThrow: publicProcedure.input(FileFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstFileOrThrow = await ctx.prisma.file.findFirstOrThrow(input)
    return findFirstFileOrThrow
  }),
  findManyFile: publicProcedure.input(FileFindManySchema).query(async ({ ctx, input }) => {
    const findManyFile = await ctx.prisma.file.findMany(input)
    return findManyFile
  }),
  findUniqueFile: publicProcedure.input(FileFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueFile = await ctx.prisma.file.findUnique(input)
    return findUniqueFile
  }),
  findUniqueFileOrThrow: publicProcedure.input(FileFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueFileOrThrow = await ctx.prisma.file.findUniqueOrThrow(input)
    return findUniqueFileOrThrow
  }),
  //   groupByFile: publicProcedure.input(FileGroupBySchema).query(async ({ ctx, input }) => {
  //     const groupByFile = await ctx.prisma.file.groupBy(input)
  //     return groupByFile
  //   }),
  updateManyFile: protectedProcedure.input(FileUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyFile = await ctx.prisma.file.updateMany(input)
    return updateManyFile
  }),
  updateOneFile: protectedProcedure.input(FileUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneFile = await ctx.prisma.file.update(input)
    return updateOneFile
  }),
  upsertOneFile: protectedProcedure.input(FileUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneFile = await ctx.prisma.file.upsert(input)
    return upsertOneFile
  }),
})
