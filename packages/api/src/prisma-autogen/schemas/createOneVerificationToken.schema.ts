import { z } from 'zod'
import { VerificationTokenSelectObjectSchema } from './objects/VerificationTokenSelect.schema'
import { VerificationTokenCreateInputObjectSchema } from './objects/VerificationTokenCreateInput.schema'

export const VerificationTokenCreateOneSchema = z.object({
  select: VerificationTokenSelectObjectSchema.optional(),
  data: VerificationTokenCreateInputObjectSchema,
})
