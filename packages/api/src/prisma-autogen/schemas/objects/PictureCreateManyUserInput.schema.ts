import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    src: z.string(),
    propertyId: z.string(),
    order: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const PictureCreateManyUserInputObjectSchema = Schema
