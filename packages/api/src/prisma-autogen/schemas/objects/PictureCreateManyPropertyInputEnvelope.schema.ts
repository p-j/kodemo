import { z } from 'zod'
import { PictureCreateManyPropertyInputObjectSchema } from './PictureCreateManyPropertyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateManyPropertyInputEnvelope> = z
  .object({
    data: z.lazy(() => PictureCreateManyPropertyInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PictureCreateManyPropertyInputEnvelopeObjectSchema = Schema
