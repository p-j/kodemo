import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'
import { FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema'
import { BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'
import { EnumRentTypeWithAggregatesFilterObjectSchema } from './EnumRentTypeWithAggregatesFilter.schema'
import { RentTypeSchema } from '../enums/RentType.schema'
import { EnumPropertyTypeWithAggregatesFilterObjectSchema } from './EnumPropertyTypeWithAggregatesFilter.schema'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PropertyScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PropertyScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PropertyScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PropertyScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PropertyScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
    description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    roomCount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    bedroomCount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    floor: z
      .union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    floorCount: z
      .union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    surface: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
    totalSurface: z
      .union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    hasElevator: z
      .union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    reference: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    rentType: z
      .union([z.lazy(() => EnumRentTypeWithAggregatesFilterObjectSchema), z.lazy(() => RentTypeSchema)])
      .optional(),
    title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    type: z
      .union([z.lazy(() => EnumPropertyTypeWithAggregatesFilterObjectSchema), z.lazy(() => PropertyTypeSchema)])
      .optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
    userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const PropertyScalarWhereWithAggregatesInputObjectSchema = Schema
