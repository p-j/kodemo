import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EnumStateFilterObjectSchema } from './EnumStateFilter.schema'
import { StateSchema } from '../enums/State.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { FloatFilterObjectSchema } from './FloatFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { PropertyRelationFilterObjectSchema } from './PropertyRelationFilter.schema'
import { PropertyWhereInputObjectSchema } from './PropertyWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => ListingWhereInputObjectSchema), z.lazy(() => ListingWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => ListingWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => ListingWhereInputObjectSchema), z.lazy(() => ListingWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    propertyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    state: z.union([z.lazy(() => EnumStateFilterObjectSchema), z.lazy(() => StateSchema)]).optional(),
    from: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    duration: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    utilities: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    property: z
      .union([z.lazy(() => PropertyRelationFilterObjectSchema), z.lazy(() => PropertyWhereInputObjectSchema)])
      .optional(),
  })
  .strict()

export const ListingWhereInputObjectSchema = Schema
