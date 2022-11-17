import { z } from 'zod'
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema'
import { PropertyCreateNestedManyWithoutUserInputObjectSchema } from './PropertyCreateNestedManyWithoutUserInput.schema'
import { PictureCreateNestedManyWithoutUserInputObjectSchema } from './PictureCreateNestedManyWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
    properties: z.lazy(() => PropertyCreateNestedManyWithoutUserInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutSessionsInputObjectSchema = Schema
