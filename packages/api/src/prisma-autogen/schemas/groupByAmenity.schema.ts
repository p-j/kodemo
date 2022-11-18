import { z } from 'zod'
import { AmenityWhereInputObjectSchema } from './objects/AmenityWhereInput.schema'
import { AmenityOrderByWithAggregationInputObjectSchema } from './objects/AmenityOrderByWithAggregationInput.schema'
import { AmenityScalarWhereWithAggregatesInputObjectSchema } from './objects/AmenityScalarWhereWithAggregatesInput.schema'
import { AmenityScalarFieldEnumSchema } from './enums/AmenityScalarFieldEnum.schema'

export const AmenityGroupBySchema = z.object({
  where: AmenityWhereInputObjectSchema.optional(),
  orderBy: z
    .union([AmenityOrderByWithAggregationInputObjectSchema, AmenityOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: AmenityScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AmenityScalarFieldEnumSchema),
})
