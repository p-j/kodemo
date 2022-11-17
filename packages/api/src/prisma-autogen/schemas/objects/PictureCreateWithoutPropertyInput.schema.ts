import { z } from 'zod'
import { UserCreateNestedOneWithoutPicturesInputObjectSchema } from './UserCreateNestedOneWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateWithoutPropertyInput> = z
  .object({
    id: z.string().optional(),
    src: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutPicturesInputObjectSchema),
    order: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const PictureCreateWithoutPropertyInputObjectSchema = Schema
