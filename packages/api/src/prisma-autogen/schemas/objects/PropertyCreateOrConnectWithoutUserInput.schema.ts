import { z } from 'zod'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyCreateWithoutUserInputObjectSchema } from './PropertyCreateWithoutUserInput.schema'
import { PropertyUncheckedCreateWithoutUserInputObjectSchema } from './PropertyUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutUserInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyCreateOrConnectWithoutUserInputObjectSchema = Schema
