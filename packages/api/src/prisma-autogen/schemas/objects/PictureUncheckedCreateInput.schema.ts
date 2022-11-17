import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    src: z.string(),
    propertyId: z.string(),
    userId: z.string(),
    order: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const PictureUncheckedCreateInputObjectSchema = Schema
