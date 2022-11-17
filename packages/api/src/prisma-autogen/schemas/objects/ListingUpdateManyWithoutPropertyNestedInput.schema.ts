import { z } from 'zod'
import { ListingCreateWithoutPropertyInputObjectSchema } from './ListingCreateWithoutPropertyInput.schema'
import { ListingUncheckedCreateWithoutPropertyInputObjectSchema } from './ListingUncheckedCreateWithoutPropertyInput.schema'
import { ListingCreateOrConnectWithoutPropertyInputObjectSchema } from './ListingCreateOrConnectWithoutPropertyInput.schema'
import { ListingUpsertWithWhereUniqueWithoutPropertyInputObjectSchema } from './ListingUpsertWithWhereUniqueWithoutPropertyInput.schema'
import { ListingCreateManyPropertyInputEnvelopeObjectSchema } from './ListingCreateManyPropertyInputEnvelope.schema'
import { ListingWhereUniqueInputObjectSchema } from './ListingWhereUniqueInput.schema'
import { ListingUpdateWithWhereUniqueWithoutPropertyInputObjectSchema } from './ListingUpdateWithWhereUniqueWithoutPropertyInput.schema'
import { ListingUpdateManyWithWhereWithoutPropertyInputObjectSchema } from './ListingUpdateManyWithWhereWithoutPropertyInput.schema'
import { ListingScalarWhereInputObjectSchema } from './ListingScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingUpdateManyWithoutPropertyNestedInput> = z.union([
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
      upsert: z
        .union([
          z.lazy(() => ListingUpsertWithWhereUniqueWithoutPropertyInputObjectSchema),
          z.lazy(() => ListingUpsertWithWhereUniqueWithoutPropertyInputObjectSchema).array(),
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
      set: z
        .union([
          z.lazy(() => ListingWhereUniqueInputObjectSchema),
          z.lazy(() => ListingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([
          z.lazy(() => ListingWhereUniqueInputObjectSchema),
          z.lazy(() => ListingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([
          z.lazy(() => ListingWhereUniqueInputObjectSchema),
          z.lazy(() => ListingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
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
  z
    .object({
      update: z
        .union([
          z.lazy(() => ListingUpdateWithWhereUniqueWithoutPropertyInputObjectSchema),
          z.lazy(() => ListingUpdateWithWhereUniqueWithoutPropertyInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => ListingUpdateManyWithWhereWithoutPropertyInputObjectSchema),
          z.lazy(() => ListingUpdateManyWithWhereWithoutPropertyInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([
          z.lazy(() => ListingScalarWhereInputObjectSchema),
          z.lazy(() => ListingScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const ListingUpdateManyWithoutPropertyNestedInputObjectSchema = Schema
