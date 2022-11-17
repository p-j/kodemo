import { z } from 'zod'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'
import { PictureUpdateWithoutPropertyInputObjectSchema } from './PictureUpdateWithoutPropertyInput.schema'
import { PictureUncheckedUpdateWithoutPropertyInputObjectSchema } from './PictureUncheckedUpdateWithoutPropertyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureUpdateWithWhereUniqueWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => PictureWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PictureUpdateWithoutPropertyInputObjectSchema),
      z.lazy(() => PictureUncheckedUpdateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict()

export const PictureUpdateWithWhereUniqueWithoutPropertyInputObjectSchema = Schema
