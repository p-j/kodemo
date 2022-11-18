import { z } from 'zod'
import { FileSelectObjectSchema } from './objects/FileSelect.schema'
import { FileIncludeObjectSchema } from './objects/FileInclude.schema'
import { FileCreateInputObjectSchema } from './objects/FileCreateInput.schema'

export const FileCreateOneSchema = z.object({
  select: FileSelectObjectSchema.optional(),
  include: FileIncludeObjectSchema.optional(),
  data: FileCreateInputObjectSchema,
})
