import { z } from 'zod'
import { RentTypeSchema } from '../enums/RentType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumRentTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => RentTypeSchema).optional(),
  })
  .strict()

export const EnumRentTypeFieldUpdateOperationsInputObjectSchema = Schema
