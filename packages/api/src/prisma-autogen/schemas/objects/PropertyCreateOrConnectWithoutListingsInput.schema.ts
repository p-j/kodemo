import { z } from 'zod'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyCreateWithoutListingsInputObjectSchema } from './PropertyCreateWithoutListingsInput.schema'
import { PropertyUncheckedCreateWithoutListingsInputObjectSchema } from './PropertyUncheckedCreateWithoutListingsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutListingsInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutListingsInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutListingsInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyCreateOrConnectWithoutListingsInputObjectSchema = Schema
