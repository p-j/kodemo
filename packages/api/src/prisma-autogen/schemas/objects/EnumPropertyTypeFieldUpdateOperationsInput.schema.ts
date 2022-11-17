import { z } from 'zod'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumPropertyTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PropertyTypeSchema).optional(),
  })
  .strict()

export const EnumPropertyTypeFieldUpdateOperationsInputObjectSchema = Schema
