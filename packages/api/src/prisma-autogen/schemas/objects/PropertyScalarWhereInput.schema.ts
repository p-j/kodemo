import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema'
import { FloatFilterObjectSchema } from './FloatFilter.schema'
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'
import { EnumRentTypeFilterObjectSchema } from './EnumRentTypeFilter.schema'
import { RentTypeSchema } from '../enums/RentType.schema'
import { EnumPropertyTypeFilterObjectSchema } from './EnumPropertyTypeFilter.schema'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PropertyScalarWhereInputObjectSchema),
        z.lazy(() => PropertyScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PropertyScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PropertyScalarWhereInputObjectSchema),
        z.lazy(() => PropertyScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    roomCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    bedroomCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    floor: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    floorCount: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    surface: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    totalSurface: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    hasElevator: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    reference: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    rentType: z.union([z.lazy(() => EnumRentTypeFilterObjectSchema), z.lazy(() => RentTypeSchema)]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumPropertyTypeFilterObjectSchema), z.lazy(() => PropertyTypeSchema)]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const PropertyScalarWhereInputObjectSchema = Schema
