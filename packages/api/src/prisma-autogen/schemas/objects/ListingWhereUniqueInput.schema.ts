import { z } from 'zod'
import { ListingPropertyIdFromDurationCompoundUniqueInputObjectSchema } from './ListingPropertyIdFromDurationCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    propertyId_from_duration: z.lazy(() => ListingPropertyIdFromDurationCompoundUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ListingWhereUniqueInputObjectSchema = Schema
