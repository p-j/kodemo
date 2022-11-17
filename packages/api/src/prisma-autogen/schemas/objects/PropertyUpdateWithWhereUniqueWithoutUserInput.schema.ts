import { z } from 'zod'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyUpdateWithoutUserInputObjectSchema } from './PropertyUpdateWithoutUserInput.schema'
import { PropertyUncheckedUpdateWithoutUserInputObjectSchema } from './PropertyUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PropertyUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
