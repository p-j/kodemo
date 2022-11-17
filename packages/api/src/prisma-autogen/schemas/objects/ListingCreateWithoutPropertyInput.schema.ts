import { z } from 'zod'
import { StateSchema } from '../enums/State.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingCreateWithoutPropertyInput> = z
  .object({
    id: z.string().optional(),
    state: z.lazy(() => StateSchema).optional(),
    from: z.date().optional().nullable(),
    duration: z.string().optional().nullable(),
    price: z.number(),
    utilities: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const ListingCreateWithoutPropertyInputObjectSchema = Schema
