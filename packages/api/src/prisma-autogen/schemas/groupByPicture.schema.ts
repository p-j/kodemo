import { z } from 'zod'
import { PictureWhereInputObjectSchema } from './objects/PictureWhereInput.schema'
import { PictureOrderByWithAggregationInputObjectSchema } from './objects/PictureOrderByWithAggregationInput.schema'
import { PictureScalarWhereWithAggregatesInputObjectSchema } from './objects/PictureScalarWhereWithAggregatesInput.schema'
import { PictureScalarFieldEnumSchema } from './enums/PictureScalarFieldEnum.schema'

export const PictureGroupBySchema = z.object({
  where: PictureWhereInputObjectSchema.optional(),
  orderBy: z
    .union([PictureOrderByWithAggregationInputObjectSchema, PictureOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: PictureScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PictureScalarFieldEnumSchema),
})
