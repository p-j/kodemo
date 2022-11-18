import { protectedProcedure, publicProcedure, router } from '../../trpc'
import { ProfileFindUniqueSchema } from '../schemas/findUniqueProfile.schema'
import { ProfileFindFirstSchema } from '../schemas/findFirstProfile.schema'
import { ProfileFindManySchema } from '../schemas/findManyProfile.schema'
import { ProfileCreateOneSchema } from '../schemas/createOneProfile.schema'
import { ProfileCreateManySchema } from '../schemas/createManyProfile.schema'
import { ProfileDeleteOneSchema } from '../schemas/deleteOneProfile.schema'
import { ProfileUpdateOneSchema } from '../schemas/updateOneProfile.schema'
import { ProfileDeleteManySchema } from '../schemas/deleteManyProfile.schema'
import { ProfileUpdateManySchema } from '../schemas/updateManyProfile.schema'
import { ProfileUpsertSchema } from '../schemas/upsertOneProfile.schema'
import { ProfileAggregateSchema } from '../schemas/aggregateProfile.schema'
import { ProfileGroupBySchema } from '../schemas/groupByProfile.schema'

export const profilesRouter = router({
  aggregateProfile: publicProcedure.input(ProfileAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateProfile = await ctx.prisma.profile.aggregate(input)
    return aggregateProfile
  }),
  createManyProfile: protectedProcedure.input(ProfileCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyProfile = await ctx.prisma.profile.createMany(input)
    return createManyProfile
  }),
  createOneProfile: protectedProcedure.input(ProfileCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOneProfile = await ctx.prisma.profile.create(input)
    return createOneProfile
  }),
  deleteManyProfile: protectedProcedure.input(ProfileDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyProfile = await ctx.prisma.profile.deleteMany(input)
    return deleteManyProfile
  }),
  deleteOneProfile: protectedProcedure.input(ProfileDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOneProfile = await ctx.prisma.profile.delete(input)
    return deleteOneProfile
  }),
  findFirstProfile: publicProcedure.input(ProfileFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstProfile = await ctx.prisma.profile.findFirst(input)
    return findFirstProfile
  }),
  findFirstProfileOrThrow: publicProcedure.input(ProfileFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstProfileOrThrow = await ctx.prisma.profile.findFirstOrThrow(input)
    return findFirstProfileOrThrow
  }),
  findManyProfile: publicProcedure.input(ProfileFindManySchema).query(async ({ ctx, input }) => {
    const findManyProfile = await ctx.prisma.profile.findMany(input)
    return findManyProfile
  }),
  findUniqueProfile: publicProcedure.input(ProfileFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueProfile = await ctx.prisma.profile.findUnique(input)
    return findUniqueProfile
  }),
  findUniqueProfileOrThrow: publicProcedure.input(ProfileFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniqueProfileOrThrow = await ctx.prisma.profile.findUniqueOrThrow(input)
    return findUniqueProfileOrThrow
  }),

  updateManyProfile: protectedProcedure.input(ProfileUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyProfile = await ctx.prisma.profile.updateMany(input)
    return updateManyProfile
  }),
  updateOneProfile: protectedProcedure.input(ProfileUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOneProfile = await ctx.prisma.profile.update(input)
    return updateOneProfile
  }),
  upsertOneProfile: protectedProcedure.input(ProfileUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneProfile = await ctx.prisma.profile.upsert(input)
    return upsertOneProfile
  }),
})
