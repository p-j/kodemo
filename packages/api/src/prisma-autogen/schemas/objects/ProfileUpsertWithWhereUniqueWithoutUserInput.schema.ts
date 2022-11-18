import { z } from 'zod'
import { ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'
import { ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema'
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema'
import { ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema'
import { ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProfileCreateWithoutUserInputObjectSchema),
      z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const ProfileUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
