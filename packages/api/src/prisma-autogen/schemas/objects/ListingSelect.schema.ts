import { z } from 'zod'
import { PropertyArgsObjectSchema } from './PropertyArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingSelect> = z
  .object({
    id: z.boolean().optional(),
    propertyId: z.boolean().optional(),
    state: z.boolean().optional(),
    from: z.boolean().optional(),
    duration: z.boolean().optional(),
    price: z.boolean().optional(),
    utilities: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    property: z.union([z.boolean(), z.lazy(() => PropertyArgsObjectSchema)]).optional(),
  })
  .strict()

export const ListingSelectObjectSchema = Schema
