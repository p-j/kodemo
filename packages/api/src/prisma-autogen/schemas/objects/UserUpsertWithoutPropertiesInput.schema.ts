import { z } from 'zod'
import { UserUpdateWithoutPropertiesInputObjectSchema } from './UserUpdateWithoutPropertiesInput.schema'
import { UserUncheckedUpdateWithoutPropertiesInputObjectSchema } from './UserUncheckedUpdateWithoutPropertiesInput.schema'
import { UserCreateWithoutPropertiesInputObjectSchema } from './UserCreateWithoutPropertiesInput.schema'
import { UserUncheckedCreateWithoutPropertiesInputObjectSchema } from './UserUncheckedCreateWithoutPropertiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutPropertiesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPropertiesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPropertiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPropertiesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPropertiesInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutPropertiesInputObjectSchema = Schema
