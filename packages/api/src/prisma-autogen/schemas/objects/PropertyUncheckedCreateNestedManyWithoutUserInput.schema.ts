import { z } from 'zod'
import { PropertyCreateWithoutUserInputObjectSchema } from './PropertyCreateWithoutUserInput.schema'
import { PropertyUncheckedCreateWithoutUserInputObjectSchema } from './PropertyUncheckedCreateWithoutUserInput.schema'
import { PropertyCreateOrConnectWithoutUserInputObjectSchema } from './PropertyCreateOrConnectWithoutUserInput.schema'
import { PropertyCreateManyUserInputEnvelopeObjectSchema } from './PropertyCreateManyUserInputEnvelope.schema'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateNestedManyWithoutUserInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => PropertyCreateWithoutUserInputObjectSchema),
          z.lazy(() => PropertyCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => PropertyUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => PropertyUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => PropertyCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => PropertyCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z.lazy(() => PropertyCreateManyUserInputEnvelopeObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => PropertyWhereUniqueInputObjectSchema),
          z.lazy(() => PropertyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export const PropertyUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema
