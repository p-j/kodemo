import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutFileInputObjectSchema } from './UserCreateWithoutFileInput.schema'
import { UserUncheckedCreateWithoutFileInputObjectSchema } from './UserUncheckedCreateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutFileInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutFileInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutFileInputObjectSchema = Schema
