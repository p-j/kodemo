import { z } from 'zod'
import { PropertyCreateNestedOneWithoutPicturesInputObjectSchema } from './PropertyCreateNestedOneWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    src: z.string(),
    property: z.lazy(() => PropertyCreateNestedOneWithoutPicturesInputObjectSchema),
    order: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const PictureCreateWithoutUserInputObjectSchema = Schema
