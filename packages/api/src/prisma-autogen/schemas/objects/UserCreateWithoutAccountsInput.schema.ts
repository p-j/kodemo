import { z } from 'zod'
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'
import { PropertyCreateNestedManyWithoutUserInputObjectSchema } from './PropertyCreateNestedManyWithoutUserInput.schema'
import { PictureCreateNestedManyWithoutUserInputObjectSchema } from './PictureCreateNestedManyWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
    properties: z.lazy(() => PropertyCreateNestedManyWithoutUserInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutAccountsInputObjectSchema = Schema
