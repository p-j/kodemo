import { z } from 'zod'
import { AmenityWhereUniqueInputObjectSchema } from './AmenityWhereUniqueInput.schema'
import { AmenityUpdateWithoutPropertiesInputObjectSchema } from './AmenityUpdateWithoutPropertiesInput.schema'
import { AmenityUncheckedUpdateWithoutPropertiesInputObjectSchema } from './AmenityUncheckedUpdateWithoutPropertiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityUpdateWithWhereUniqueWithoutPropertiesInput> = z
  .object({
    where: z.lazy(() => AmenityWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AmenityUpdateWithoutPropertiesInputObjectSchema),
      z.lazy(() => AmenityUncheckedUpdateWithoutPropertiesInputObjectSchema),
    ]),
  })
  .strict()

export const AmenityUpdateWithWhereUniqueWithoutPropertiesInputObjectSchema = Schema
