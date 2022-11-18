import { z } from 'zod'
import { UserArgsObjectSchema } from './UserArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    src: z.boolean().optional(),
  })
  .strict()

export const FileSelectObjectSchema = Schema
