import { z } from 'zod'
import { StateSchema } from '../enums/State.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.NestedEnumStateFilter> = z
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
    not: z.union([z.lazy(() => StateSchema), z.lazy(() => NestedEnumStateFilterObjectSchema)]).optional(),
  })
  .strict()

export const NestedEnumStateFilterObjectSchema = Schema
