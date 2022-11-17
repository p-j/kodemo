import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertySumAggregateInputType> = z
  .object({
    roomCount: z.literal(true).optional(),
    bedroomCount: z.literal(true).optional(),
    floor: z.literal(true).optional(),
    floorCount: z.literal(true).optional(),
    surface: z.literal(true).optional(),
    totalSurface: z.literal(true).optional(),
  })
  .strict()

export const PropertySumAggregateInputObjectSchema = Schema
