import { z } from 'zod'
import { AccountSelectObjectSchema } from './objects/AccountSelect.schema'
import { AccountIncludeObjectSchema } from './objects/AccountInclude.schema'
import { AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema'
import { AccountOrderByWithRelationInputObjectSchema } from './objects/AccountOrderByWithRelationInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema'
import { AccountScalarFieldEnumSchema } from './enums/AccountScalarFieldEnum.schema'

export const AccountFindManySchema = z.object({
  select: z.lazy(() => AccountSelectObjectSchema.optional()),
  include: z.lazy(() => AccountIncludeObjectSchema.optional()),
  where: AccountWhereInputObjectSchema.optional(),
  orderBy: AccountOrderByWithRelationInputObjectSchema.optional(),
  cursor: AccountWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AccountScalarFieldEnumSchema).optional(),
})
