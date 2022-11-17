import { z } from 'zod'
import { StateSchema } from '../enums/State.schema'
import { PropertyCreateNestedOneWithoutListingsInputObjectSchema } from './PropertyCreateNestedOneWithoutListingsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingCreateInput> = z
  .object({
    id: z.string().optional(),
    state: z.lazy(() => StateSchema).optional(),
    from: z.date().optional().nullable(),
    duration: z.string().optional().nullable(),
    price: z.number(),
    utilities: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    property: z.lazy(() => PropertyCreateNestedOneWithoutListingsInputObjectSchema),
  })
  .strict()

export const ListingCreateInputObjectSchema = Schema
