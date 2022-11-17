import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCountOutputTypeSelect> = z
  .object({
    amenities: z.boolean().optional(),
    listings: z.boolean().optional(),
    pictures: z.boolean().optional(),
  })
  .strict()

export const PropertyCountOutputTypeSelectObjectSchema = Schema
