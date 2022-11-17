import { z } from 'zod'
import { RentTypeSchema } from '../enums/RentType.schema'
import { NestedEnumRentTypeWithAggregatesFilterObjectSchema } from './NestedEnumRentTypeWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumRentTypeFilterObjectSchema } from './NestedEnumRentTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumRentTypeWithAggregatesFilter> = z
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
    not: z
      .union([z.lazy(() => RentTypeSchema), z.lazy(() => NestedEnumRentTypeWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumRentTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumRentTypeFilterObjectSchema).optional(),
  })
  .strict()

export const EnumRentTypeWithAggregatesFilterObjectSchema = Schema
