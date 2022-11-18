import { protectedProcedure, publicProcedure, router } from '../../trpc'
import { ListingFindUniqueSchema } from '../schemas/findUniqueListing.schema'
import { ListingFindFirstSchema } from '../schemas/findFirstListing.schema'
import { ListingFindManySchema } from '../schemas/findManyListing.schema'
import { ListingCreateOneSchema } from '../schemas/createOneListing.schema'
import { ListingCreateManySchema } from '../schemas/createManyListing.schema'
import { ListingDeleteOneSchema } from '../schemas/deleteOneListing.schema'
import { ListingUpdateOneSchema } from '../schemas/updateOneListing.schema'
import { ListingDeleteManySchema } from '../schemas/deleteManyListing.schema'
import { ListingUpdateManySchema } from '../schemas/updateManyListing.schema'
import { ListingUpsertSchema } from '../schemas/upsertOneListing.schema'
import { ListingAggregateSchema } from '../schemas/aggregateListing.schema'
import { ListingGroupBySchema } from '../schemas/groupByListing.schema'

export const listingsRouter = router({
  aggregateListing: publicProcedure.input(ListingAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateListing = await ctx.prisma.listing.aggregate(input)
    return aggregateListing
  }),
  createManyListing: protectedProcedure.input(ListingCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyListing = await ctx.prisma.listing.createMany(input)
    return createManyListing
  }),
  createOneListing: protectedProcedure.input(ListingCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneListing = await ctx.prisma.listing.create(input)
    return createOneListing
  }),
  deleteManyListing: protectedProcedure.input(ListingDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyListing = await ctx.prisma.listing.deleteMany(input)
    return deleteManyListing
  }),
  deleteOneListing: protectedProcedure.input(ListingDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneListing = await ctx.prisma.listing.delete(input)
    return deleteOneListing
  }),
  findFirstListing: publicProcedure.input(ListingFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstListing = await ctx.prisma.listing.findFirst(input)
    return findFirstListing
  }),
  findFirstListingOrThrow: publicProcedure.input(ListingFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstListingOrThrow = await ctx.prisma.listing.findFirstOrThrow(input)
    return findFirstListingOrThrow
  }),
  findManyListing: publicProcedure.input(ListingFindManySchema).query(async ({ ctx, input }) => {
    const findManyListing = await ctx.prisma.listing.findMany(input)
    return findManyListing
  }),
  findUniqueListing: publicProcedure.input(ListingFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueListing = await ctx.prisma.listing.findUnique(input)
    return findUniqueListing
  }),
  findUniqueListingOrThrow: publicProcedure.input(ListingFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueListingOrThrow = await ctx.prisma.listing.findUniqueOrThrow(input)
    return findUniqueListingOrThrow
  }),

  updateManyListing: protectedProcedure.input(ListingUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyListing = await ctx.prisma.listing.updateMany(input)
    return updateManyListing
  }),
  updateOneListing: protectedProcedure.input(ListingUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneListing = await ctx.prisma.listing.update(input)
    return updateOneListing
  }),
  upsertOneListing: protectedProcedure.input(ListingUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneListing = await ctx.prisma.listing.upsert(input)
    return upsertOneListing
  }),
})
