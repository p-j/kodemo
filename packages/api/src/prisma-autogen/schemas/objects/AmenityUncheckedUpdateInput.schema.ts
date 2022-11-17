import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { PropertyUncheckedUpdateManyWithoutAmenitiesNestedInputObjectSchema } from './PropertyUncheckedUpdateManyWithoutAmenitiesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    properties: z.lazy(() => PropertyUncheckedUpdateManyWithoutAmenitiesNestedInputObjectSchema).optional(),
  })
  .strict()

export const AmenityUncheckedUpdateInputObjectSchema = Schema
