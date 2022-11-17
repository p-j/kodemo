import { z } from 'zod'
import { AmenitySelectObjectSchema } from './objects/AmenitySelect.schema'
import { AmenityIncludeObjectSchema } from './objects/AmenityInclude.schema'
import { AmenityWhereInputObjectSchema } from './objects/AmenityWhereInput.schema'
import { AmenityOrderByWithRelationInputObjectSchema } from './objects/AmenityOrderByWithRelationInput.schema'
import { AmenityWhereUniqueInputObjectSchema } from './objects/AmenityWhereUniqueInput.schema'
import { AmenityScalarFieldEnumSchema } from './enums/AmenityScalarFieldEnum.schema'

export const AmenityFindManySchema = z.object({
  select: z.lazy(() => AmenitySelectObjectSchema.optional()),
  include: z.lazy(() => AmenityIncludeObjectSchema.optional()),
  where: AmenityWhereInputObjectSchema.optional(),
  orderBy: AmenityOrderByWithRelationInputObjectSchema.optional(),
  cursor: AmenityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AmenityScalarFieldEnumSchema).optional(),
})
