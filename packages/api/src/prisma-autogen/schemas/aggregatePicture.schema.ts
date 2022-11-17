import { z } from 'zod'
import { PictureWhereInputObjectSchema } from './objects/PictureWhereInput.schema'
import { PictureOrderByWithRelationInputObjectSchema } from './objects/PictureOrderByWithRelationInput.schema'
import { PictureWhereUniqueInputObjectSchema } from './objects/PictureWhereUniqueInput.schema'
import { PictureCountAggregateInputObjectSchema } from './objects/PictureCountAggregateInput.schema'
import { PictureMinAggregateInputObjectSchema } from './objects/PictureMinAggregateInput.schema'
import { PictureMaxAggregateInputObjectSchema } from './objects/PictureMaxAggregateInput.schema'
import { PictureAvgAggregateInputObjectSchema } from './objects/PictureAvgAggregateInput.schema'
import { PictureSumAggregateInputObjectSchema } from './objects/PictureSumAggregateInput.schema'

export const PictureAggregateSchema = z.object({
  where: PictureWhereInputObjectSchema.optional(),
  orderBy: PictureOrderByWithRelationInputObjectSchema.optional(),
  cursor: PictureWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), PictureCountAggregateInputObjectSchema]).optional(),
  _min: PictureMinAggregateInputObjectSchema.optional(),
  _max: PictureMaxAggregateInputObjectSchema.optional(),
  _avg: PictureAvgAggregateInputObjectSchema.optional(),
  _sum: PictureSumAggregateInputObjectSchema.optional(),
})
