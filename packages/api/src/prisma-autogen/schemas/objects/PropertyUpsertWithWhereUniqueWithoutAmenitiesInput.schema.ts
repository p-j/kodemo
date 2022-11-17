import { z } from 'zod'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyUpdateWithoutAmenitiesInputObjectSchema } from './PropertyUpdateWithoutAmenitiesInput.schema'
import { PropertyUncheckedUpdateWithoutAmenitiesInputObjectSchema } from './PropertyUncheckedUpdateWithoutAmenitiesInput.schema'
import { PropertyCreateWithoutAmenitiesInputObjectSchema } from './PropertyCreateWithoutAmenitiesInput.schema'
import { PropertyUncheckedCreateWithoutAmenitiesInputObjectSchema } from './PropertyUncheckedCreateWithoutAmenitiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpsertWithWhereUniqueWithoutAmenitiesInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutAmenitiesInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutAmenitiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutAmenitiesInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutAmenitiesInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyUpsertWithWhereUniqueWithoutAmenitiesInputObjectSchema = Schema
