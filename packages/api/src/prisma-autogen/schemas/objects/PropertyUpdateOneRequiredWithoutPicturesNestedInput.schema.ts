import { z } from 'zod'
import { PropertyCreateWithoutPicturesInputObjectSchema } from './PropertyCreateWithoutPicturesInput.schema'
import { PropertyUncheckedCreateWithoutPicturesInputObjectSchema } from './PropertyUncheckedCreateWithoutPicturesInput.schema'
import { PropertyCreateOrConnectWithoutPicturesInputObjectSchema } from './PropertyCreateOrConnectWithoutPicturesInput.schema'
import { PropertyUpsertWithoutPicturesInputObjectSchema } from './PropertyUpsertWithoutPicturesInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyUpdateWithoutPicturesInputObjectSchema } from './PropertyUpdateWithoutPicturesInput.schema'
import { PropertyUncheckedUpdateWithoutPicturesInputObjectSchema } from './PropertyUncheckedUpdateWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpdateOneRequiredWithoutPicturesNestedInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutPicturesInputObjectSchema),
          z.lazy(() => PropertyUncheckedCreateWithoutPicturesInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z.lazy(() => PropertyCreateOrConnectWithoutPicturesInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      upsert: z.lazy(() => PropertyUpsertWithoutPicturesInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => PropertyUpdateWithoutPicturesInputObjectSchema),
          z.lazy(() => PropertyUncheckedUpdateWithoutPicturesInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export const PropertyUpdateOneRequiredWithoutPicturesNestedInputObjectSchema = Schema
