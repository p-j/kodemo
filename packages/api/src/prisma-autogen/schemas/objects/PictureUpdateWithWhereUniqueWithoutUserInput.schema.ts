import { z } from 'zod'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'
import { PictureUpdateWithoutUserInputObjectSchema } from './PictureUpdateWithoutUserInput.schema'
import { PictureUncheckedUpdateWithoutUserInputObjectSchema } from './PictureUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PictureWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PictureUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PictureUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const PictureUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
