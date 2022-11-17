import { z } from 'zod'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'
import { PictureUpdateWithoutUserInputObjectSchema } from './PictureUpdateWithoutUserInput.schema'
import { PictureUncheckedUpdateWithoutUserInputObjectSchema } from './PictureUncheckedUpdateWithoutUserInput.schema'
import { PictureCreateWithoutUserInputObjectSchema } from './PictureCreateWithoutUserInput.schema'
import { PictureUncheckedCreateWithoutUserInputObjectSchema } from './PictureUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PictureWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PictureUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PictureUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PictureCreateWithoutUserInputObjectSchema),
      z.lazy(() => PictureUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const PictureUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
