import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AmenityUncheckedUpdateManyWithoutPropertiesNestedInputObjectSchema } from './AmenityUncheckedUpdateManyWithoutPropertiesNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema'
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'
import { ListingUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from './ListingUncheckedUpdateManyWithoutPropertyNestedInput.schema'
import { PictureUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema } from './PictureUncheckedUpdateManyWithoutPropertyNestedInput.schema'
import { RentTypeSchema } from '../enums/RentType.schema'
import { EnumRentTypeFieldUpdateOperationsInputObjectSchema } from './EnumRentTypeFieldUpdateOperationsInput.schema'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'
import { EnumPropertyTypeFieldUpdateOperationsInputObjectSchema } from './EnumPropertyTypeFieldUpdateOperationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    amenities: z.lazy(() => AmenityUncheckedUpdateManyWithoutPropertiesNestedInputObjectSchema).optional(),
    createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    roomCount: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    bedroomCount: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    floor: z
      .union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    floorCount: z
      .union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    surface: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
    totalSurface: z
      .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    hasElevator: z
      .union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    listings: z.lazy(() => ListingUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureUncheckedUpdateManyWithoutPropertyNestedInputObjectSchema).optional(),
    reference: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    rentType: z
      .union([z.lazy(() => RentTypeSchema), z.lazy(() => EnumRentTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z
      .union([z.lazy(() => PropertyTypeSchema), z.lazy(() => EnumPropertyTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()

export const PropertyUncheckedUpdateInputObjectSchema = Schema
