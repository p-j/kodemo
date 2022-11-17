import { z } from 'zod'
import { PropertyWhereUniqueInputObjectSchema } from './PropertyWhereUniqueInput.schema'
import { PropertyUpdateWithoutAmenitiesInputObjectSchema } from './PropertyUpdateWithoutAmenitiesInput.schema'
import { PropertyUncheckedUpdateWithoutAmenitiesInputObjectSchema } from './PropertyUncheckedUpdateWithoutAmenitiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpdateWithWhereUniqueWithoutAmenitiesInput> = z
  .object({
    where: z.lazy(() => PropertyWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PropertyUpdateWithoutAmenitiesInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutAmenitiesInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyUpdateWithWhereUniqueWithoutAmenitiesInputObjectSchema = Schema
