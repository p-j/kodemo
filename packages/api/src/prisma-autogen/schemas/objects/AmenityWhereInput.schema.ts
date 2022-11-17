import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { PropertyListRelationFilterObjectSchema } from './PropertyListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => AmenityWhereInputObjectSchema), z.lazy(() => AmenityWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => AmenityWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => AmenityWhereInputObjectSchema), z.lazy(() => AmenityWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    properties: z.lazy(() => PropertyListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const AmenityWhereInputObjectSchema = Schema
