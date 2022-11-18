import { z } from 'zod'
import { FileCreateWithoutUserInputObjectSchema } from './FileCreateWithoutUserInput.schema'
import { FileUncheckedCreateWithoutUserInputObjectSchema } from './FileUncheckedCreateWithoutUserInput.schema'
import { FileCreateOrConnectWithoutUserInputObjectSchema } from './FileCreateOrConnectWithoutUserInput.schema'
import { FileUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutUserInput.schema'
import { FileCreateManyUserInputEnvelopeObjectSchema } from './FileCreateManyUserInputEnvelope.schema'
import { FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'
import { FileUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutUserInput.schema'
import { FileUpdateManyWithWhereWithoutUserInputObjectSchema } from './FileUpdateManyWithWhereWithoutUserInput.schema'
import { FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileUncheckedUpdateManyWithoutUserNestedInput> = z.union([
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
      upsert: z
        .union([
          z.lazy(() => FileUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => FileUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
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
      set: z
        .union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()])
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()])
        .optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => FileUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => FileUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(() => FileUpdateManyWithWhereWithoutUserInputObjectSchema),
          z.lazy(() => FileUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()])
        .optional(),
    })
    .strict(),
])

export const FileUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
