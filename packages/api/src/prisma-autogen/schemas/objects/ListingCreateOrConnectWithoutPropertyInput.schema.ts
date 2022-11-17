import { z } from 'zod'
import { ListingWhereUniqueInputObjectSchema } from './ListingWhereUniqueInput.schema'
import { ListingCreateWithoutPropertyInputObjectSchema } from './ListingCreateWithoutPropertyInput.schema'
import { ListingUncheckedCreateWithoutPropertyInputObjectSchema } from './ListingUncheckedCreateWithoutPropertyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingCreateOrConnectWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => ListingWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ListingCreateWithoutPropertyInputObjectSchema),
      z.lazy(() => ListingUncheckedCreateWithoutPropertyInputObjectSchema),
    ]),
  })
  .strict()

export const ListingCreateOrConnectWithoutPropertyInputObjectSchema = Schema
