import { z } from 'zod'
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'
import { ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema'
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const ProfileUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
