import { z } from 'zod'
import { PropertyScalarWhereInputObjectSchema } from './PropertyScalarWhereInput.schema'
import { PropertyUpdateManyMutationInputObjectSchema } from './PropertyUpdateManyMutationInput.schema'
import { PropertyUncheckedUpdateManyWithoutPropertiesInputObjectSchema } from './PropertyUncheckedUpdateManyWithoutPropertiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUpdateManyWithWhereWithoutAmenitiesInput> = z
  .object({
    where: z.lazy(() => PropertyScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PropertyUpdateManyMutationInputObjectSchema),
      z.lazy(() => PropertyUncheckedUpdateManyWithoutPropertiesInputObjectSchema),
    ]),
  })
  .strict()

export const PropertyUpdateManyWithWhereWithoutAmenitiesInputObjectSchema = Schema
