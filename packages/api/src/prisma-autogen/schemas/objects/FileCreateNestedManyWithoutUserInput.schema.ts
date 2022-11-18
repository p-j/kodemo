import { z } from 'zod'
import { FileCreateWithoutUserInputObjectSchema } from './FileCreateWithoutUserInput.schema'
import { FileUncheckedCreateWithoutUserInputObjectSchema } from './FileUncheckedCreateWithoutUserInput.schema'
import { FileCreateOrConnectWithoutUserInputObjectSchema } from './FileCreateOrConnectWithoutUserInput.schema'
import { FileCreateManyUserInputEnvelopeObjectSchema } from './FileCreateManyUserInputEnvelope.schema'
import { FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileCreateNestedManyWithoutUserInput> = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => FileCreateWithoutUserInputObjectSchema),
          z.lazy(() => FileCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => FileUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => FileUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => FileCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => FileCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z.lazy(() => FileCreateManyUserInputEnvelopeObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()])
        .optional(),
    })
    .strict(),
])

export const FileCreateNestedManyWithoutUserInputObjectSchema = Schema
