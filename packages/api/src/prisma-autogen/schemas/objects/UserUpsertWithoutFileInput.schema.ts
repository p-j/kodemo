import { z } from 'zod'
import { UserUpdateWithoutFileInputObjectSchema } from './UserUpdateWithoutFileInput.schema'
import { UserUncheckedUpdateWithoutFileInputObjectSchema } from './UserUncheckedUpdateWithoutFileInput.schema'
import { UserCreateWithoutFileInputObjectSchema } from './UserCreateWithoutFileInput.schema'
import { UserUncheckedCreateWithoutFileInputObjectSchema } from './UserUncheckedCreateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutFileInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutFileInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutFileInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutFileInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutFileInputObjectSchema = Schema
