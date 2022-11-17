import { z } from 'zod'
import { ListingScalarWhereInputObjectSchema } from './ListingScalarWhereInput.schema'
import { ListingUpdateManyMutationInputObjectSchema } from './ListingUpdateManyMutationInput.schema'
import { ListingUncheckedUpdateManyWithoutListingsInputObjectSchema } from './ListingUncheckedUpdateManyWithoutListingsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ListingUpdateManyWithWhereWithoutPropertyInput> = z
  .object({
    where: z.lazy(() => ListingScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ListingUpdateManyMutationInputObjectSchema),
      z.lazy(() => ListingUncheckedUpdateManyWithoutListingsInputObjectSchema),
    ]),
  })
  .strict()

export const ListingUpdateManyWithWhereWithoutPropertyInputObjectSchema = Schema
