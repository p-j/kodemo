import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema'
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema'
import { PropertyListRelationFilterObjectSchema } from './PropertyListRelationFilter.schema'
import { PictureListRelationFilterObjectSchema } from './PictureListRelationFilter.schema'
import { FileListRelationFilterObjectSchema } from './FileListRelationFilter.schema'
import { ProfileRelationFilterObjectSchema } from './ProfileRelationFilter.schema'
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    properties: z.lazy(() => PropertyListRelationFilterObjectSchema).optional(),
    pictures: z.lazy(() => PictureListRelationFilterObjectSchema).optional(),
    files: z.lazy(() => FileListRelationFilterObjectSchema).optional(),
    profile: z
      .union([z.lazy(() => ProfileRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const UserWhereInputObjectSchema = Schema
