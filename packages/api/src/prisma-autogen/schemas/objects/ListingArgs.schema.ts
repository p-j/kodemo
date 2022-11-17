import { z } from 'zod'
import { ListingSelectObjectSchema } from './ListingSelect.schema'
import { ListingIncludeObjectSchema } from './ListingInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingArgs> = z
  .object({
    select: z.lazy(() => ListingSelectObjectSchema).optional(),
    include: z.lazy(() => ListingIncludeObjectSchema).optional(),
  })
  .strict()

export const ListingArgsObjectSchema = Schema
