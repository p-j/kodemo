import { z } from 'zod'
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'
import { PropertyUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PropertyUncheckedCreateNestedManyWithoutUserInput.schema'
import { PictureUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PictureUncheckedCreateNestedManyWithoutUserInput.schema'
import { FileUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    properties: z.lazy(() => PropertyUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    files: z.lazy(() => FileUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutProfileInputObjectSchema = Schema
