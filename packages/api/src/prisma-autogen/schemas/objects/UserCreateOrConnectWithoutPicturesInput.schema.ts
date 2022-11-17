import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutPicturesInputObjectSchema } from './UserCreateWithoutPicturesInput.schema'
import { UserUncheckedCreateWithoutPicturesInputObjectSchema } from './UserUncheckedCreateWithoutPicturesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPicturesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPicturesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPicturesInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutPicturesInputObjectSchema = Schema
