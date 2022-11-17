import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AmenityUpdateManyWithoutPropertiesNestedInputObjectSchema } from './AmenityUpdateManyWithoutPropertiesNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema'
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'
import { PictureUpdateManyWithoutPropertyNestedInputObjectSchema } from './PictureUpdateManyWithoutPropertyNestedInput.schema'
import { RentTypeSchema } from '../enums/RentType.schema'
import { EnumRentTypeFieldUpdateOperationsInputObjectSchema } from './EnumRentTypeFieldUpdateOperationsInput.schema'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'
import { EnumPropertyTypeFieldUpdateOperationsInputObjectSchema } from './EnumPropertyTypeFieldUpdateOperationsInput.schema'
import { UserUpdateOneRequiredWithoutPropertiesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPropertiesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpdateWithoutListingsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    amenities: z.lazy(() => AmenityUpdateManyWithoutPropertiesNestedInputObjectSchema).optional(),
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
    pictures: z.lazy(() => PictureUpdateManyWithoutPropertyNestedInputObjectSchema).optional(),
    reference: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    rentType: z
      .union([z.lazy(() => RentTypeSchema), z.lazy(() => EnumRentTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z
      .union([z.lazy(() => PropertyTypeSchema), z.lazy(() => EnumPropertyTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutPropertiesNestedInputObjectSchema).optional(),
  })
  .strict()

export const PropertyUpdateWithoutListingsInputObjectSchema = Schema
