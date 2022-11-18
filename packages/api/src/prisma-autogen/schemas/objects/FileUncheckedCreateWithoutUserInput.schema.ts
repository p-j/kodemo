import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    src: z.string(),
  })
  .strict()

export const FileUncheckedCreateWithoutUserInputObjectSchema = Schema
