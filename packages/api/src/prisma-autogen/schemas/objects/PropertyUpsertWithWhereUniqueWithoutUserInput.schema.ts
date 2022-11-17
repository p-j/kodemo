import { z } from 'zod'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyUpdateWithoutUserInputObjectSchema } from './PropertyUpdateWithoutUserInput.schema'
import { PropertyUncheckedUpdateWithoutUserInputObjectSchema } from './PropertyUncheckedUpdateWithoutUserInput.schema'
import { PropertyCreateWithoutUserInputObjectSchema } from './PropertyCreateWithoutUserInput.schema'
import { PropertyUncheckedCreateWithoutUserInputObjectSchema } from './PropertyUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutUserInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutUserInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
