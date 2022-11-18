import { z } from 'zod'
import { UserCreateNestedOneWithoutFilesInputObjectSchema } from './UserCreateNestedOneWithoutFilesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutFilesInputObjectSchema),
    src: z.string(),
  })
  .strict()

export const FileCreateInputObjectSchema = Schema
