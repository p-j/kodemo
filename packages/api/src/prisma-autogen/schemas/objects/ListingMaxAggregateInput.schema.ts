import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    propertyId: z.literal(true).optional(),
    state: z.literal(true).optional(),
    from: z.literal(true).optional(),
    duration: z.literal(true).optional(),
    price: z.literal(true).optional(),
    utilities: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const ListingMaxAggregateInputObjectSchema = Schema
