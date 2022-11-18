import { z } from 'zod'
import { FileWhereInputObjectSchema } from './objects/FileWhereInput.schema'
import { FileOrderByWithRelationInputObjectSchema } from './objects/FileOrderByWithRelationInput.schema'
import { FileWhereUniqueInputObjectSchema } from './objects/FileWhereUniqueInput.schema'
import { FileCountAggregateInputObjectSchema } from './objects/FileCountAggregateInput.schema'
import { FileMinAggregateInputObjectSchema } from './objects/FileMinAggregateInput.schema'
import { FileMaxAggregateInputObjectSchema } from './objects/FileMaxAggregateInput.schema'

export const FileAggregateSchema = z.object({
  where: FileWhereInputObjectSchema.optional(),
  orderBy: z
    .union([FileOrderByWithRelationInputObjectSchema, FileOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  cursor: FileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), FileCountAggregateInputObjectSchema]).optional(),
  _min: FileMinAggregateInputObjectSchema.optional(),
  _max: FileMaxAggregateInputObjectSchema.optional(),
})
