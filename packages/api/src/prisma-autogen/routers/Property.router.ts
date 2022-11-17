import { protectedProcedure, publicProcedure, router } from '../../trpc'
import { PropertyFindUniqueSchema } from '../schemas/findUniqueProperty.schema'
import { PropertyFindFirstSchema } from '../schemas/findFirstProperty.schema'
import { PropertyFindManySchema } from '../schemas/findManyProperty.schema'
import { PropertyCreateOneSchema } from '../schemas/createOneProperty.schema'
import { PropertyCreateManySchema } from '../schemas/createManyProperty.schema'
import { PropertyDeleteOneSchema } from '../schemas/deleteOneProperty.schema'
import { PropertyUpdateOneSchema } from '../schemas/updateOneProperty.schema'
import { PropertyDeleteManySchema } from '../schemas/deleteManyProperty.schema'
import { PropertyUpdateManySchema } from '../schemas/updateManyProperty.schema'
import { PropertyUpsertSchema } from '../schemas/upsertOneProperty.schema'
import { PropertyAggregateSchema } from '../schemas/aggregateProperty.schema'
import { PropertyGroupBySchema } from '../schemas/groupByProperty.schema'

export const propertiesRouter = router({
  aggregateProperty: publicProcedure.input(PropertyAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateProperty = await ctx.prisma.property.aggregate(input)
    return aggregateProperty
  }),

  createManyProperty: protectedProcedure.input(PropertyCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyProperty = await ctx.prisma.property.createMany(input)
    return createManyProperty
  }),

  createOneProperty: protectedProcedure.input(PropertyCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneProperty = await ctx.prisma.property.create(input)
    return createOneProperty
  }),

  deleteManyProperty: protectedProcedure.input(PropertyDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyProperty = await ctx.prisma.property.deleteMany(input)
    return deleteManyProperty
  }),

  deleteOneProperty: protectedProcedure.input(PropertyDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneProperty = await ctx.prisma.property.delete(input)
    return deleteOneProperty
  }),

  findFirstProperty: publicProcedure.input(PropertyFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstProperty = await ctx.prisma.property.findFirst(input)
    return findFirstProperty
  }),

  findManyProperty: publicProcedure.input(PropertyFindManySchema).query(async ({ ctx, input }) => {
    const findManyProperty = await ctx.prisma.property.findMany(input)
    return findManyProperty
  }),

  findUniqueProperty: publicProcedure.input(PropertyFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueProperty = await ctx.prisma.property.findUnique(input)
    return findUniqueProperty
  }),

  groupByProperty: publicProcedure.input(PropertyGroupBySchema).query(async ({ ctx, input }) => {
    const groupByProperty = await ctx.prisma.property.groupBy(input)
    return groupByProperty
  }),

  updateManyProperty: protectedProcedure.input(PropertyUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyProperty = await ctx.prisma.property.updateMany(input)
    return updateManyProperty
  }),

  updateOneProperty: protectedProcedure.input(PropertyUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneProperty = await ctx.prisma.property.update(input)
    return updateOneProperty
  }),

  upsertOneProperty: protectedProcedure.input(PropertyUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneProperty = await ctx.prisma.property.upsert(input)
    return upsertOneProperty
  }),
})
