import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingSumAggregateInputType> = z
  .object({
    price: z.literal(true).optional(),
    utilities: z.literal(true).optional(),
  })
  .strict()

export const ListingSumAggregateInputObjectSchema = Schema
