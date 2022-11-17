import { z } from 'zod'
import { PictureWhereInputObjectSchema } from './PictureWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureListRelationFilter> = z
  .object({
    every: z.lazy(() => PictureWhereInputObjectSchema).optional(),
    some: z.lazy(() => PictureWhereInputObjectSchema).optional(),
    none: z.lazy(() => PictureWhereInputObjectSchema).optional(),
  })
  .strict()

export const PictureListRelationFilterObjectSchema = Schema
