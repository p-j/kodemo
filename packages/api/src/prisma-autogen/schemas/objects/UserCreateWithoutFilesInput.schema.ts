import { z } from 'zod'
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema'
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'
import { PropertyCreateNestedManyWithoutUserInputObjectSchema } from './PropertyCreateNestedManyWithoutUserInput.schema'
import { PictureCreateNestedManyWithoutUserInputObjectSchema } from './PictureCreateNestedManyWithoutUserInput.schema'
import { ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateWithoutFilesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
    properties: z.lazy(() => PropertyCreateNestedManyWithoutUserInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureCreateNestedManyWithoutUserInputObjectSchema).optional(),
    profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutFilesInputObjectSchema = Schema
