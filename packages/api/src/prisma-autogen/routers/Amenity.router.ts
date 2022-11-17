import { protectedProcedure, publicProcedure, router } from '../../trpc'
import { AmenityFindUniqueSchema } from '../schemas/findUniqueAmenity.schema'
import { AmenityFindFirstSchema } from '../schemas/findFirstAmenity.schema'
import { AmenityFindManySchema } from '../schemas/findManyAmenity.schema'
import { AmenityCreateOneSchema } from '../schemas/createOneAmenity.schema'
import { AmenityCreateManySchema } from '../schemas/createManyAmenity.schema'
import { AmenityDeleteOneSchema } from '../schemas/deleteOneAmenity.schema'
import { AmenityUpdateOneSchema } from '../schemas/updateOneAmenity.schema'
import { AmenityDeleteManySchema } from '../schemas/deleteManyAmenity.schema'
import { AmenityUpdateManySchema } from '../schemas/updateManyAmenity.schema'
import { AmenityUpsertSchema } from '../schemas/upsertOneAmenity.schema'
import { AmenityAggregateSchema } from '../schemas/aggregateAmenity.schema'
import { AmenityGroupBySchema } from '../schemas/groupByAmenity.schema'

export const amenitiesRouter = router({
  aggregateAmenity: publicProcedure.input(AmenityAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateAmenity = await ctx.prisma.amenity.aggregate(input)
    return aggregateAmenity
  }),

  createManyAmenity: protectedProcedure.input(AmenityCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyAmenity = await ctx.prisma.amenity.createMany(input)
    return createManyAmenity
  }),

  createOneAmenity: protectedProcedure.input(AmenityCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneAmenity = await ctx.prisma.amenity.create(input)
    return createOneAmenity
  }),

  deleteManyAmenity: protectedProcedure.input(AmenityDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyAmenity = await ctx.prisma.amenity.deleteMany(input)
    return deleteManyAmenity
  }),

  deleteOneAmenity: protectedProcedure.input(AmenityDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneAmenity = await ctx.prisma.amenity.delete(input)
    return deleteOneAmenity
  }),

  findFirstAmenity: publicProcedure.input(AmenityFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstAmenity = await ctx.prisma.amenity.findFirst(input)
    return findFirstAmenity
  }),

  findManyAmenity: publicProcedure.input(AmenityFindManySchema).query(async ({ ctx, input }) => {
    const findManyAmenity = await ctx.prisma.amenity.findMany(input)
    return findManyAmenity
  }),

  findUniqueAmenity: publicProcedure.input(AmenityFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueAmenity = await ctx.prisma.amenity.findUnique(input)
    return findUniqueAmenity
  }),

  groupByAmenity: publicProcedure.input(AmenityGroupBySchema).query(async ({ ctx, input }) => {
    const groupByAmenity = await ctx.prisma.amenity.groupBy(input)
    return groupByAmenity
  }),

  updateManyAmenity: protectedProcedure.input(AmenityUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyAmenity = await ctx.prisma.amenity.updateMany(input)
    return updateManyAmenity
  }),

  updateOneAmenity: protectedProcedure.input(AmenityUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneAmenity = await ctx.prisma.amenity.update(input)
    return updateOneAmenity
  }),

  upsertOneAmenity: protectedProcedure.input(AmenityUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneAmenity = await ctx.prisma.amenity.upsert(input)
    return upsertOneAmenity
  }),
})
