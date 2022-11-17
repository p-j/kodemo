import { z } from 'zod'
import { AmenityWhereUniqueInputObjectSchema } from './AmenityWhereUniqueInput.schema'
import { AmenityUpdateWithoutPropertiesInputObjectSchema } from './AmenityUpdateWithoutPropertiesInput.schema'
import { AmenityUncheckedUpdateWithoutPropertiesInputObjectSchema } from './AmenityUncheckedUpdateWithoutPropertiesInput.schema'
import { AmenityCreateWithoutPropertiesInputObjectSchema } from './AmenityCreateWithoutPropertiesInput.schema'
import { AmenityUncheckedCreateWithoutPropertiesInputObjectSchema } from './AmenityUncheckedCreateWithoutPropertiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityUpsertWithWhereUniqueWithoutPropertiesInput> = z
  .object({
    where: z.lazy(() => AmenityWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AmenityUpdateWithoutPropertiesInputObjectSchema),
      z.lazy(() => AmenityUncheckedUpdateWithoutPropertiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AmenityCreateWithoutPropertiesInputObjectSchema),
      z.lazy(() => AmenityUncheckedCreateWithoutPropertiesInputObjectSchema),
    ]),
  })
  .strict()

export const AmenityUpsertWithWhereUniqueWithoutPropertiesInputObjectSchema = Schema
