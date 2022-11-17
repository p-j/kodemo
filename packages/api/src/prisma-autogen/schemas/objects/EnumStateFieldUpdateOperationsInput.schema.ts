import { z } from 'zod'
import { StateSchema } from '../enums/State.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EnumStateFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => StateSchema).optional(),
  })
  .strict()

export const EnumStateFieldUpdateOperationsInputObjectSchema = Schema
