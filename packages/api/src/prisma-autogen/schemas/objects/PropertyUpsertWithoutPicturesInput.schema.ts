import { z } from 'zod'
import { PropertyUpdateWithoutPicturesInputObjectSchema } from './PropertyUpdateWithoutPicturesInput.schema'
import { PropertyUncheckedUpdateWithoutPicturesInputObjectSchema } from './PropertyUncheckedUpdateWithoutPicturesInput.schema'
import { PropertyCreateWithoutPicturesInputObjectSchema } from './PropertyCreateWithoutPicturesInput.schema'
import { PropertyUncheckedCreateWithoutPicturesInputObjectSchema } from './PropertyUncheckedCreateWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpsertWithoutPicturesInput> = z
  .object({
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutPicturesInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutPicturesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutPicturesInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutPicturesInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyUpsertWithoutPicturesInputObjectSchema = Schema
