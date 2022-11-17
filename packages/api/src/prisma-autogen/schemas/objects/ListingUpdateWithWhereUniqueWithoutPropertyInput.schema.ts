import { z } from 'zod'
import { ListingWhereUniqueInputObjectSchema } from './ListingWhereUniqueInput.schema'
import { ListingUpdateWithoutPropertyInputObjectSchema } from './ListingUpdateWithoutPropertyInput.schema'
import { ListingUncheckedUpdateWithoutPropertyInputObjectSchema } from './ListingUncheckedUpdateWithoutPropertyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingUpdateWithWhereUniqueWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => ListingWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ListingUpdateWithoutPropertyInputObjectSchema),
      z.lazy(() => ListingUncheckedUpdateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict()

export const ListingUpdateWithWhereUniqueWithoutPropertyInputObjectSchema = Schema
