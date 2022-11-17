import { z } from 'zod'
import { PictureSelectObjectSchema } from './PictureSelect.schema'
import { PictureIncludeObjectSchema } from './PictureInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureArgs> = z
  .object({
    select: z.lazy(() => PictureSelectObjectSchema).optional(),
    include: z.lazy(() => PictureIncludeObjectSchema).optional(),
  })
  .strict()

export const PictureArgsObjectSchema = Schema
