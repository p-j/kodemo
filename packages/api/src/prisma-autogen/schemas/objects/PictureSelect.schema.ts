import { z } from 'zod'
import { PropertyArgsObjectSchema } from './PropertyArgs.schema'
import { UserArgsObjectSchema } from './UserArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureSelect> = z
  .object({
    id: z.boolean().optional(),
    src: z.boolean().optional(),
    propertyId: z.boolean().optional(),
    property: z.union([z.boolean(), z.lazy(() => PropertyArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    order: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const PictureSelectObjectSchema = Schema
