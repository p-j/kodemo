import { z } from 'zod'
import { PropertyCreateWithoutListingsInputObjectSchema } from './PropertyCreateWithoutListingsInput.schema'
import { PropertyUncheckedCreateWithoutListingsInputObjectSchema } from './PropertyUncheckedCreateWithoutListingsInput.schema'
import { PropertyCreateOrConnectWithoutListingsInputObjectSchema } from './PropertyCreateOrConnectWithoutListingsInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateNestedOneWithoutListingsInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutListingsInputObjectSchema),
          z.lazy(() => PropertyUncheckedCreateWithoutListingsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z.lazy(() => PropertyCreateOrConnectWithoutListingsInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export const PropertyCreateNestedOneWithoutListingsInputObjectSchema = Schema
