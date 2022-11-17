import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AmenityScalarWhereInputObjectSchema),
        z.lazy(() => AmenityScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AmenityScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AmenityScalarWhereInputObjectSchema),
        z.lazy(() => AmenityScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const AmenityScalarWhereInputObjectSchema = Schema
