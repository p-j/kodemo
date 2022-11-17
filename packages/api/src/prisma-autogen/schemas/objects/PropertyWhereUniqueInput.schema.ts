import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    reference: z.string().optional(),
  })
  .strict()

export const PropertyWhereUniqueInputObjectSchema = Schema
