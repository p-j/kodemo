import { z } from 'zod'
import { VerificationTokenSelectObjectSchema } from './objects/VerificationTokenSelect.schema'
import { VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema'
import { VerificationTokenCreateInputObjectSchema } from './objects/VerificationTokenCreateInput.schema'
import { VerificationTokenUpdateInputObjectSchema } from './objects/VerificationTokenUpdateInput.schema'

export const VerificationTokenUpsertSchema = z.object({
  select: VerificationTokenSelectObjectSchema.optional(),
  where: VerificationTokenWhereUniqueInputObjectSchema,
  create: VerificationTokenCreateInputObjectSchema,
  update: VerificationTokenUpdateInputObjectSchema,
})
