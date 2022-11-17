import { z } from 'zod'
import { PropertyCreateManyUserInputObjectSchema } from './PropertyCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => PropertyCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PropertyCreateManyUserInputEnvelopeObjectSchema = Schema
