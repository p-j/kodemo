import { z } from 'zod'
import { SessionSelectObjectSchema } from './objects/SessionSelect.schema'
import { SessionIncludeObjectSchema } from './objects/SessionInclude.schema'
import { SessionCreateInputObjectSchema } from './objects/SessionCreateInput.schema'

export const SessionCreateOneSchema = z.object({
  select: SessionSelectObjectSchema.optional(),
  include: SessionIncludeObjectSchema.optional(),
  data: SessionCreateInputObjectSchema,
})
