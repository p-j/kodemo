import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    address: z.literal(true).optional(),
    country: z.literal(true).optional(),
    city: z.literal(true).optional(),
    region: z.literal(true).optional(),
    postalCode: z.literal(true).optional(),
    bio: z.literal(true).optional(),
  })
  .strict()

export const ProfileMaxAggregateInputObjectSchema = Schema
