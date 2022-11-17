import { z } from 'zod'
import { VerificationTokenSelectObjectSchema } from './objects/VerificationTokenSelect.schema'
import { VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema'
import { VerificationTokenOrderByWithRelationInputObjectSchema } from './objects/VerificationTokenOrderByWithRelationInput.schema'
import { VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema'
import { VerificationTokenScalarFieldEnumSchema } from './enums/VerificationTokenScalarFieldEnum.schema'

export const VerificationTokenFindManySchema = z.object({
  select: z.lazy(() => VerificationTokenSelectObjectSchema.optional()),
  where: VerificationTokenWhereInputObjectSchema.optional(),
  orderBy: VerificationTokenOrderByWithRelationInputObjectSchema.optional(),
  cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VerificationTokenScalarFieldEnumSchema).optional(),
})
