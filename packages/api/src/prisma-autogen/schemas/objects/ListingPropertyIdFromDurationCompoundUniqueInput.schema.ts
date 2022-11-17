import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingPropertyIdFromDurationCompoundUniqueInput> = z
  .object({
    propertyId: z.string(),
    from: z.date(),
    duration: z.string(),
  })
  .strict()

export const ListingPropertyIdFromDurationCompoundUniqueInputObjectSchema = Schema
