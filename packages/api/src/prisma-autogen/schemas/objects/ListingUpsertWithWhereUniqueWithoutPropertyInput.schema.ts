import { z } from 'zod'
import { ListingWhereUniqueInputObjectSchema } from './ListingWhereUniqueInput.schema'
import { ListingUpdateWithoutPropertyInputObjectSchema } from './ListingUpdateWithoutPropertyInput.schema'
import { ListingUncheckedUpdateWithoutPropertyInputObjectSchema } from './ListingUncheckedUpdateWithoutPropertyInput.schema'
import { ListingCreateWithoutPropertyInputObjectSchema } from './ListingCreateWithoutPropertyInput.schema'
import { ListingUncheckedCreateWithoutPropertyInputObjectSchema } from './ListingUncheckedCreateWithoutPropertyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingUpsertWithWhereUniqueWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => ListingWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ListingUpdateWithoutPropertyInputObjectSchema),
      z.lazy(() => ListingUncheckedUpdateWithoutPropertyInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ListingCreateWithoutPropertyInputObjectSchema),
      z.lazy(() => ListingUncheckedCreateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict()

export const ListingUpsertWithWhereUniqueWithoutPropertyInputObjectSchema = Schema
