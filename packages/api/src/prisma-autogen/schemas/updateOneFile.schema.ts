import { z } from 'zod'
import { FileSelectObjectSchema } from './objects/FileSelect.schema'
import { FileIncludeObjectSchema } from './objects/FileInclude.schema'
import { FileUpdateInputObjectSchema } from './objects/FileUpdateInput.schema'
import { FileWhereUniqueInputObjectSchema } from './objects/FileWhereUniqueInput.schema'

export const FileUpdateOneSchema = z.object({
  select: FileSelectObjectSchema.optional(),
  include: FileIncludeObjectSchema.optional(),
  data: FileUpdateInputObjectSchema,
  where: FileWhereUniqueInputObjectSchema,
})
