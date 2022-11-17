import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    description: z.literal(true).optional(),
    roomCount: z.literal(true).optional(),
    bedroomCount: z.literal(true).optional(),
    floor: z.literal(true).optional(),
    floorCount: z.literal(true).optional(),
    surface: z.literal(true).optional(),
    totalSurface: z.literal(true).optional(),
    hasElevator: z.literal(true).optional(),
    reference: z.literal(true).optional(),
    rentType: z.literal(true).optional(),
    title: z.literal(true).optional(),
    type: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const PropertyCountAggregateInputObjectSchema = Schema
