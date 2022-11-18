import { z } from 'zod'
import { UserCreateNestedOneWithoutFileInputObjectSchema } from './UserCreateNestedOneWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutFileInputObjectSchema),
    src: z.string(),
  })
  .strict()

export const FileCreateInputObjectSchema = Schema
