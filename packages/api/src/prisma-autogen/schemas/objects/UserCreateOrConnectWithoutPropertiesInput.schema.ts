import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutPropertiesInputObjectSchema } from './UserCreateWithoutPropertiesInput.schema'
import { UserUncheckedCreateWithoutPropertiesInputObjectSchema } from './UserUncheckedCreateWithoutPropertiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPropertiesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPropertiesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPropertiesInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutPropertiesInputObjectSchema = Schema
