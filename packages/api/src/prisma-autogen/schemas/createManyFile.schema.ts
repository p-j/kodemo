import { z } from 'zod'
import { FileCreateManyInputObjectSchema } from './objects/FileCreateManyInput.schema'

export const FileCreateManySchema = z.object({ data: FileCreateManyInputObjectSchema })
