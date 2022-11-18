import { z } from 'zod'
import { ProfileScalarWhereInputObjectSchema } from './ProfileScalarWhereInput.schema'
import { ProfileUpdateManyMutationInputObjectSchema } from './ProfileUpdateManyMutationInput.schema'
import { ProfileUncheckedUpdateManyWithoutProfileInputObjectSchema } from './ProfileUncheckedUpdateManyWithoutProfileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProfileScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ProfileUpdateManyMutationInputObjectSchema),
      z.lazy(() => ProfileUncheckedUpdateManyWithoutProfileInputObjectSchema),
    ]),
  })
  .strict()

export const ProfileUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
