import { z } from 'zod'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'
import { PictureCreateWithoutPropertyInputObjectSchema } from './PictureCreateWithoutPropertyInput.schema'
import { PictureUncheckedCreateWithoutPropertyInputObjectSchema } from './PictureUncheckedCreateWithoutPropertyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateOrConnectWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => PictureWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PictureCreateWithoutPropertyInputObjectSchema),
      z.lazy(() => PictureUncheckedCreateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict()

export const PictureCreateOrConnectWithoutPropertyInputObjectSchema = Schema
