import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateManyPropertyInput> = z
  .object({
    id: z.string().optional(),
    src: z.string(),
    userId: z.string(),
    order: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const PictureCreateManyPropertyInputObjectSchema = Schema
