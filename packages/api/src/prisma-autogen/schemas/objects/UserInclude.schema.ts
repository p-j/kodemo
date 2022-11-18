import { z } from 'zod'
import { AccountFindManySchema } from '../findManyAccount.schema'
import { SessionFindManySchema } from '../findManySession.schema'
import { PropertyFindManySchema } from '../findManyProperty.schema'
import { PictureFindManySchema } from '../findManyPicture.schema'
import { ProfileFindManySchema } from '../findManyProfile.schema'
import { FileFindManySchema } from '../findManyFile.schema'
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    properties: z.union([z.boolean(), z.lazy(() => PropertyFindManySchema)]).optional(),
    pictures: z.union([z.boolean(), z.lazy(() => PictureFindManySchema)]).optional(),
    Profile: z.union([z.boolean(), z.lazy(() => ProfileFindManySchema)]).optional(),
    File: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema
