import { z } from 'zod'
import { ListingCreateWithoutPropertyInputObjectSchema } from './ListingCreateWithoutPropertyInput.schema'
import { ListingUncheckedCreateWithoutPropertyInputObjectSchema } from './ListingUncheckedCreateWithoutPropertyInput.schema'
import { ListingCreateOrConnectWithoutPropertyInputObjectSchema } from './ListingCreateOrConnectWithoutPropertyInput.schema'
import { ListingCreateManyPropertyInputEnvelopeObjectSchema } from './ListingCreateManyPropertyInputEnvelope.schema'
import { ListingWhereUniqueInputObjectSchema } from './ListingWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingCreateNestedManyWithoutPropertyInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ListingCreateWithoutPropertyInputObjectSchema),
          z.lazy(() => ListingCreateWithoutPropertyInputObjectSchema).array(),
          z.lazy(() => ListingUncheckedCreateWithoutPropertyInputObjectSchema),
          z.lazy(() => ListingUncheckedCreateWithoutPropertyInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => ListingCreateOrConnectWithoutPropertyInputObjectSchema),
          z.lazy(() => ListingCreateOrConnectWithoutPropertyInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z.lazy(() => ListingCreateManyPropertyInputEnvelopeObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => ListingWhereUniqueInputObjectSchema),
          z.lazy(() => ListingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const ListingCreateNestedManyWithoutPropertyInputObjectSchema = Schema
