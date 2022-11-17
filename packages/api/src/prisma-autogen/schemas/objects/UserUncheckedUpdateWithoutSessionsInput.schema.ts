import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema'
import { PropertyUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PropertyUncheckedUpdateManyWithoutUserNestedInput.schema'
import { PictureUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PictureUncheckedUpdateManyWithoutUserNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z
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
    accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    properties: z.lazy(() => PropertyUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedUpdateWithoutSessionsInputObjectSchema = Schema
