import { z } from 'zod'
import { ListingCreateManyPropertyInputObjectSchema } from './ListingCreateManyPropertyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingCreateManyPropertyInputEnvelope> = z
  .object({
    data: z.lazy(() => ListingCreateManyPropertyInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const ListingCreateManyPropertyInputEnvelopeObjectSchema = Schema
