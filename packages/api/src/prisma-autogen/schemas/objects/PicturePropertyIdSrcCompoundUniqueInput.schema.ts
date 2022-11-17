import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PicturePropertyIdSrcCompoundUniqueInput> = z
  .object({
    propertyId: z.string(),
    src: z.string(),
  })
  .strict()

export const PicturePropertyIdSrcCompoundUniqueInputObjectSchema = Schema
