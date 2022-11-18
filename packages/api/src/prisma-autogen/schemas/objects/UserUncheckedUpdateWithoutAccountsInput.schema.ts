import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema'
import { PropertyUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PropertyUncheckedUpdateManyWithoutUserNestedInput.schema'
import { PictureUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PictureUncheckedUpdateManyWithoutUserNestedInput.schema'
import { ProfileUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ProfileUncheckedUpdateManyWithoutUserNestedInput.schema'
import { FileUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './FileUncheckedUpdateManyWithoutUserNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z
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
    sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    properties: z.lazy(() => PropertyUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    Profile: z.lazy(() => ProfileUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    File: z.lazy(() => FileUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedUpdateWithoutAccountsInputObjectSchema = Schema
