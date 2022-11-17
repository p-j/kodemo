import { z } from 'zod'
import { PropertyCreateWithoutPicturesInputObjectSchema } from './PropertyCreateWithoutPicturesInput.schema'
import { PropertyUncheckedCreateWithoutPicturesInputObjectSchema } from './PropertyUncheckedCreateWithoutPicturesInput.schema'
import { PropertyCreateOrConnectWithoutPicturesInputObjectSchema } from './PropertyCreateOrConnectWithoutPicturesInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateNestedOneWithoutPicturesInput> = z.union([
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
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export const PropertyCreateNestedOneWithoutPicturesInputObjectSchema = Schema
