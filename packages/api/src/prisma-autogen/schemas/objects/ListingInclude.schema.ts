import { z } from 'zod'
import { PropertyArgsObjectSchema } from './PropertyArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingInclude> = z
  .object({
    property: z.union([z.boolean(), z.lazy(() => PropertyArgsObjectSchema)]).optional(),
  })
  .strict()

export const ListingIncludeObjectSchema = Schema
