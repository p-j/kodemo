import { z } from 'zod'
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'
import { PropertyUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PropertyUncheckedCreateNestedManyWithoutUserInput.schema'
import { PictureUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PictureUncheckedCreateNestedManyWithoutUserInput.schema'
import { ProfileUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ProfileUncheckedCreateNestedManyWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutFileInput> = z
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
    Profile: z.lazy(() => ProfileUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutFileInputObjectSchema = Schema
