import { z } from 'zod'
import { PictureWhereUniqueInputObjectSchema } from './PictureWhereUniqueInput.schema'
import { PictureCreateWithoutUserInputObjectSchema } from './PictureCreateWithoutUserInput.schema'
import { PictureUncheckedCreateWithoutUserInputObjectSchema } from './PictureUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => PictureWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PictureCreateWithoutUserInputObjectSchema),
      z.lazy(() => PictureUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const PictureCreateOrConnectWithoutUserInputObjectSchema = Schema
