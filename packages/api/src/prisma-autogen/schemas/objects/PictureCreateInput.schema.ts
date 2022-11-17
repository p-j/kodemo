import { z } from 'zod'
import { PropertyCreateNestedOneWithoutPicturesInputObjectSchema } from './PropertyCreateNestedOneWithoutPicturesInput.schema'
import { UserCreateNestedOneWithoutPicturesInputObjectSchema } from './UserCreateNestedOneWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateInput> = z
  .object({
    id: z.string().optional(),
    src: z.string(),
    property: z.lazy(() => PropertyCreateNestedOneWithoutPicturesInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutPicturesInputObjectSchema),
    order: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const PictureCreateInputObjectSchema = Schema
