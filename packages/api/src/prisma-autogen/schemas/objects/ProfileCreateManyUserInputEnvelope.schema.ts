import { z } from 'zod'
import { ProfileCreateManyUserInputObjectSchema } from './ProfileCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => ProfileCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const ProfileCreateManyUserInputEnvelopeObjectSchema = Schema
