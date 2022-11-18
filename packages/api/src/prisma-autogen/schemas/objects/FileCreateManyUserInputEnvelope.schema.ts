import { z } from 'zod'
import { FileCreateManyUserInputObjectSchema } from './FileCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => FileCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const FileCreateManyUserInputEnvelopeObjectSchema = Schema
