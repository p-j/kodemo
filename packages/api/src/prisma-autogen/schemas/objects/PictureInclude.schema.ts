import { z } from 'zod'
import { PropertyArgsObjectSchema } from './PropertyArgs.schema'
import { UserArgsObjectSchema } from './UserArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureInclude> = z
  .object({
    property: z.union([z.boolean(), z.lazy(() => PropertyArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict()

export const PictureIncludeObjectSchema = Schema
