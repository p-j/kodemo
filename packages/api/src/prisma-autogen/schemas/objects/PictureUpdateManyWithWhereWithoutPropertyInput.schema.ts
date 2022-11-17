import { z } from 'zod'
import { PictureScalarWhereInputObjectSchema } from './PictureScalarWhereInput.schema'
import { PictureUpdateManyMutationInputObjectSchema } from './PictureUpdateManyMutationInput.schema'
import { PictureUncheckedUpdateManyWithoutPicturesInputObjectSchema } from './PictureUncheckedUpdateManyWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PictureUpdateManyWithWhereWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => PictureScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PictureUpdateManyMutationInputObjectSchema),
      z.lazy(() => PictureUncheckedUpdateManyWithoutPicturesInputObjectSchema),
    ]),
  })
  .strict()

export const PictureUpdateManyWithWhereWithoutPropertyInputObjectSchema = Schema
