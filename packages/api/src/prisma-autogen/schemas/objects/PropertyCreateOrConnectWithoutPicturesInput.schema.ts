import { z } from 'zod'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyCreateWithoutPicturesInputObjectSchema } from './PropertyCreateWithoutPicturesInput.schema'
import { PropertyUncheckedCreateWithoutPicturesInputObjectSchema } from './PropertyUncheckedCreateWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutPicturesInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutPicturesInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutPicturesInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyCreateOrConnectWithoutPicturesInputObjectSchema = Schema
