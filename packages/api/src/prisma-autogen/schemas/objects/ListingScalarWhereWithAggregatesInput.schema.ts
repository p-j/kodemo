import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { EnumStateWithAggregatesFilterObjectSchema } from './EnumStateWithAggregatesFilter.schema'
import { StateSchema } from '../enums/State.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ListingScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ListingScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ListingScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ListingScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ListingScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    propertyId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    state: z.union([z.lazy(() => EnumStateWithAggregatesFilterObjectSchema), z.lazy(() => StateSchema)]).optional(),
    from: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    duration: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    price: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
    utilities: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
  })
  .strict()

export const ListingScalarWhereWithAggregatesInputObjectSchema = Schema
