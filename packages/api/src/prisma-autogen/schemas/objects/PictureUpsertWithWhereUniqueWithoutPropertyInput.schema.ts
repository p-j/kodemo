import { z } from 'zod'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'
import { PictureUpdateWithoutPropertyInputObjectSchema } from './PictureUpdateWithoutPropertyInput.schema'
import { PictureUncheckedUpdateWithoutPropertyInputObjectSchema } from './PictureUncheckedUpdateWithoutPropertyInput.schema'
import { PictureCreateWithoutPropertyInputObjectSchema } from './PictureCreateWithoutPropertyInput.schema'
import { PictureUncheckedCreateWithoutPropertyInputObjectSchema } from './PictureUncheckedCreateWithoutPropertyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureUpsertWithWhereUniqueWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => PictureWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PictureUpdateWithoutPropertyInputObjectSchema),
      z.lazy(() => PictureUncheckedUpdateWithoutPropertyInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PictureCreateWithoutPropertyInputObjectSchema),
      z.lazy(() => PictureUncheckedCreateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict()

export const PictureUpsertWithWhereUniqueWithoutPropertyInputObjectSchema = Schema
