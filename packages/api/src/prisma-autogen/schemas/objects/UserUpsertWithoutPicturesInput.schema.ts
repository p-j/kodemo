import { z } from 'zod'
import { UserUpdateWithoutPicturesInputObjectSchema } from './UserUpdateWithoutPicturesInput.schema'
import { UserUncheckedUpdateWithoutPicturesInputObjectSchema } from './UserUncheckedUpdateWithoutPicturesInput.schema'
import { UserCreateWithoutPicturesInputObjectSchema } from './UserCreateWithoutPicturesInput.schema'
import { UserUncheckedCreateWithoutPicturesInputObjectSchema } from './UserUncheckedCreateWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutPicturesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPicturesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPicturesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPicturesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPicturesInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutPicturesInputObjectSchema = Schema
