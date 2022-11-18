import { z } from 'zod'
import { FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'
import { FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema'
import { FileUncheckedUpdateManyWithoutFileInputObjectSchema } from './FileUncheckedUpdateManyWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => FileScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => FileUpdateManyMutationInputObjectSchema),
      z.lazy(() => FileUncheckedUpdateManyWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const FileUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
