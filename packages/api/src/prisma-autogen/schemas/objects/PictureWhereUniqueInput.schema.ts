import { z } from 'zod'
import { PicturePropertyIdSrcCompoundUniqueInputObjectSchema } from './PicturePropertyIdSrcCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    propertyId_src: z.lazy(() => PicturePropertyIdSrcCompoundUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PictureWhereUniqueInputObjectSchema = Schema
