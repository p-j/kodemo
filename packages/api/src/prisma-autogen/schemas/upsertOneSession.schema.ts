import { z } from 'zod'
import { SessionSelectObjectSchema } from './objects/SessionSelect.schema'
import { SessionIncludeObjectSchema } from './objects/SessionInclude.schema'
import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema'
import { SessionCreateInputObjectSchema } from './objects/SessionCreateInput.schema'
import { SessionUpdateInputObjectSchema } from './objects/SessionUpdateInput.schema'

export const SessionUpsertSchema = z.object({
  select: SessionSelectObjectSchema.optional(),
  include: SessionIncludeObjectSchema.optional(),
  where: SessionWhereUniqueInputObjectSchema,
  create: SessionCreateInputObjectSchema,
  update: SessionUpdateInputObjectSchema,
})
