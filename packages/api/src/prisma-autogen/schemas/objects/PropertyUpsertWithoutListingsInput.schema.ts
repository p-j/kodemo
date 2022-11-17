import { z } from 'zod'
import { PropertyUpdateWithoutListingsInputObjectSchema } from './PropertyUpdateWithoutListingsInput.schema'
import { PropertyUncheckedUpdateWithoutListingsInputObjectSchema } from './PropertyUncheckedUpdateWithoutListingsInput.schema'
import { PropertyCreateWithoutListingsInputObjectSchema } from './PropertyCreateWithoutListingsInput.schema'
import { PropertyUncheckedCreateWithoutListingsInputObjectSchema } from './PropertyUncheckedCreateWithoutListingsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpsertWithoutListingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PropertyUpdateWithoutListingsInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateWithoutListingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PropertyCreateWithoutListingsInputObjectSchema),
      z.lazy(() => PropertyUncheckedCreateWithoutListingsInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyUpsertWithoutListingsInputObjectSchema = Schema
