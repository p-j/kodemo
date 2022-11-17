import { z } from 'zod'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'
import { NestedEnumPropertyTypeWithAggregatesFilterObjectSchema } from './NestedEnumPropertyTypeWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumPropertyTypeFilterObjectSchema } from './NestedEnumPropertyTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumPropertyTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PropertyTypeSchema).optional(),
    in: z
      .lazy(() => PropertyTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => PropertyTypeSchema)
      .array()
      .optional(),
    not: z
      .union([z.lazy(() => PropertyTypeSchema), z.lazy(() => NestedEnumPropertyTypeWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPropertyTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPropertyTypeFilterObjectSchema).optional(),
  })
  .strict()

export const EnumPropertyTypeWithAggregatesFilterObjectSchema = Schema
