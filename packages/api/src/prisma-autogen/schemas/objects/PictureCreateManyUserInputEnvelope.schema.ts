import { z } from 'zod'
import { PictureCreateManyUserInputObjectSchema } from './PictureCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => PictureCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PictureCreateManyUserInputEnvelopeObjectSchema = Schema
