import { z } from 'zod'
import { PropertyCreateWithoutListingsInputObjectSchema } from './PropertyCreateWithoutListingsInput.schema'
import { PropertyUncheckedCreateWithoutListingsInputObjectSchema } from './PropertyUncheckedCreateWithoutListingsInput.schema'
import { PropertyCreateOrConnectWithoutListingsInputObjectSchema } from './PropertyCreateOrConnectWithoutListingsInput.schema'
import { PropertyUpsertWithoutListingsInputObjectSchema } from './PropertyUpsertWithoutListingsInput.schema'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyUpdateWithoutListingsInputObjectSchema } from './PropertyUpdateWithoutListingsInput.schema'
import { PropertyUncheckedUpdateWithoutListingsInputObjectSchema } from './PropertyUncheckedUpdateWithoutListingsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpdateOneRequiredWithoutListingsNestedInput> = z.union([
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
      upsert: z.lazy(() => PropertyUpsertWithoutListingsInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => PropertyWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => PropertyUpdateWithoutListingsInputObjectSchema),
          z.lazy(() => PropertyUncheckedUpdateWithoutListingsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export const PropertyUpdateOneRequiredWithoutListingsNestedInputObjectSchema = Schema
