import { protectedProcedure, publicProcedure, router } from '../../trpc'

import { PictureFindUniqueSchema } from '../schemas/findUniquePicture.schema'
import { PictureFindFirstSchema } from '../schemas/findFirstPicture.schema'
import { PictureFindManySchema } from '../schemas/findManyPicture.schema'
import { PictureCreateOneSchema } from '../schemas/createOnePicture.schema'
import { PictureCreateManySchema } from '../schemas/createManyPicture.schema'
import { PictureDeleteOneSchema } from '../schemas/deleteOnePicture.schema'
import { PictureUpdateOneSchema } from '../schemas/updateOnePicture.schema'
import { PictureDeleteManySchema } from '../schemas/deleteManyPicture.schema'
import { PictureUpdateManySchema } from '../schemas/updateManyPicture.schema'
import { PictureUpsertSchema } from '../schemas/upsertOnePicture.schema'
import { PictureAggregateSchema } from '../schemas/aggregatePicture.schema'
import { PictureGroupBySchema } from '../schemas/groupByPicture.schema'

export const picturesRouter = router({
  aggregatePicture: publicProcedure.input(PictureAggregateSchema).query(async ({ ctx, input }) => {
    const aggregatePicture = await ctx.prisma.picture.aggregate(input)
    return aggregatePicture
  }),

  createManyPicture: protectedProcedure.input(PictureCreateManySchema).mutation(async ({ ctx, input }) => {
    const createManyPicture = await ctx.prisma.picture.createMany(input)
    return createManyPicture
  }),

  createOnePicture: protectedProcedure.input(PictureCreateOneSchema).mutation(async ({ ctx, input }) => {
    const createOnePicture = await ctx.prisma.picture.create(input)
    return createOnePicture
  }),

  deleteManyPicture: protectedProcedure.input(PictureDeleteManySchema).mutation(async ({ ctx, input }) => {
    const deleteManyPicture = await ctx.prisma.picture.deleteMany(input)
    return deleteManyPicture
  }),

  deleteOnePicture: protectedProcedure.input(PictureDeleteOneSchema).mutation(async ({ ctx, input }) => {
    const deleteOnePicture = await ctx.prisma.picture.delete(input)
    return deleteOnePicture
  }),

  findFirstPicture: publicProcedure.input(PictureFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstPicture = await ctx.prisma.picture.findFirst(input)
    return findFirstPicture
  }),

  findManyPicture: publicProcedure.input(PictureFindManySchema).query(async ({ ctx, input }) => {
    const findManyPicture = await ctx.prisma.picture.findMany(input)
    return findManyPicture
  }),

  findUniquePicture: publicProcedure.input(PictureFindUniqueSchema).query(async ({ ctx, input }) => {
    const findUniquePicture = await ctx.prisma.picture.findUnique(input)
    return findUniquePicture
  }),

  groupByPicture: publicProcedure.input(PictureGroupBySchema).query(async ({ ctx, input }) => {
    const groupByPicture = await ctx.prisma.picture.groupBy(input)
    return groupByPicture
  }),

  updateManyPicture: protectedProcedure.input(PictureUpdateManySchema).mutation(async ({ ctx, input }) => {
    const updateManyPicture = await ctx.prisma.picture.updateMany(input)
    return updateManyPicture
  }),

  updateOnePicture: protectedProcedure.input(PictureUpdateOneSchema).mutation(async ({ ctx, input }) => {
    const updateOnePicture = await ctx.prisma.picture.update(input)
    return updateOnePicture
  }),

  upsertOnePicture: protectedProcedure.input(PictureUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOnePicture = await ctx.prisma.picture.upsert(input)
    return upsertOnePicture
  }),
})
