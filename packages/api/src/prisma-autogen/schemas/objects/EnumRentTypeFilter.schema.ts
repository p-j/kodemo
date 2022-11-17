import { z } from 'zod'
import { RentTypeSchema } from '../enums/RentType.schema'
import { NestedEnumRentTypeFilterObjectSchema } from './NestedEnumRentTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumRentTypeFilter> = z
  .object({
    equals: z.lazy(() => RentTypeSchema).optional(),
    in: z
      .lazy(() => RentTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => RentTypeSchema)
      .array()
      .optional(),
    not: z.union([z.lazy(() => RentTypeSchema), z.lazy(() => NestedEnumRentTypeFilterObjectSchema)]).optional(),
  })
  .strict()

export const EnumRentTypeFilterObjectSchema = Schema
