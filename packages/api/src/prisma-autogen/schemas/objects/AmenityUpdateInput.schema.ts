import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { PropertyUpdateManyWithoutAmenitiesNestedInputObjectSchema } from './PropertyUpdateManyWithoutAmenitiesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    properties: z.lazy(() => PropertyUpdateManyWithoutAmenitiesNestedInputObjectSchema).optional(),
  })
  .strict()

export const AmenityUpdateInputObjectSchema = Schema
