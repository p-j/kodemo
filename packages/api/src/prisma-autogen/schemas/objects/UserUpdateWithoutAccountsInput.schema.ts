import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema'
import { PropertyUpdateManyWithoutUserNestedInputObjectSchema } from './PropertyUpdateManyWithoutUserNestedInput.schema'
import { PictureUpdateManyWithoutUserNestedInputObjectSchema } from './PictureUpdateManyWithoutUserNestedInput.schema'
import { ProfileUpdateManyWithoutUserNestedInputObjectSchema } from './ProfileUpdateManyWithoutUserNestedInput.schema'
import { FileUpdateManyWithoutUserNestedInputObjectSchema } from './FileUpdateManyWithoutUserNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    name: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    image: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    properties: z.lazy(() => PropertyUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    Profile: z.lazy(() => ProfileUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    File: z.lazy(() => FileUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUpdateWithoutAccountsInputObjectSchema = Schema
