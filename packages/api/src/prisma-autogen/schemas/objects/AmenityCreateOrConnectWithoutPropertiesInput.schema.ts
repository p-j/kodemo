import { z } from 'zod'
import { AmenityWhereUniqueInputObjectSchema } from './AmenityWhereUniqueInput.schema'
import { AmenityCreateWithoutPropertiesInputObjectSchema } from './AmenityCreateWithoutPropertiesInput.schema'
import { AmenityUncheckedCreateWithoutPropertiesInputObjectSchema } from './AmenityUncheckedCreateWithoutPropertiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AmenityCreateOrConnectWithoutPropertiesInput> = z
  .object({
    where: z.lazy(() => AmenityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AmenityCreateWithoutPropertiesInputObjectSchema),
      z.lazy(() => AmenityUncheckedCreateWithoutPropertiesInputObjectSchema),
    ]),
  })
  .strict()

export const AmenityCreateOrConnectWithoutPropertiesInputObjectSchema = Schema
