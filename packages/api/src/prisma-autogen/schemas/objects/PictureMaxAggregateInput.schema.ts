import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    src: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    order: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const PictureMaxAggregateInputObjectSchema = Schema
