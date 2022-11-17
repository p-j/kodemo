import { z } from 'zod'
import { StateSchema } from '../enums/State.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumStateFilterObjectSchema } from './NestedEnumStateFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumStateWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => StateSchema).optional(),
    in: z
      .lazy(() => StateSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => StateSchema)
      .array()
      .optional(),
    not: z.union([z.lazy(() => StateSchema), z.lazy(() => NestedEnumStateWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumStateFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumStateFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumStateWithAggregatesFilterObjectSchema = Schema
