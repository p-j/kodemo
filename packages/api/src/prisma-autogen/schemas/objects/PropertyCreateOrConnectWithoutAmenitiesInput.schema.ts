import { z } from 'zod'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyCreateWithoutAmenitiesInputObjectSchema } from './PropertyCreateWithoutAmenitiesInput.schema'
import { PropertyUncheckedCreateWithoutAmenitiesInputObjectSchema } from './PropertyUncheckedCreateWithoutAmenitiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateOrConnectWithoutAmenitiesInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutAmenitiesInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutAmenitiesInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyCreateOrConnectWithoutAmenitiesInputObjectSchema = Schema
