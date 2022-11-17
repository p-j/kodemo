import { z } from 'zod'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumPropertyTypeFilter> = z
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
    not: z.union([z.lazy(() => PropertyTypeSchema), z.lazy(() => NestedEnumPropertyTypeFilterObjectSchema)]).optional(),
  })
  .strict()

export const NestedEnumPropertyTypeFilterObjectSchema = Schema
