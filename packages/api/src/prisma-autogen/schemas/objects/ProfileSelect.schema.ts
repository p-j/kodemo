import { z } from 'zod'
import { UserArgsObjectSchema } from './UserArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    address: z.boolean().optional(),
    country: z.boolean().optional(),
    city: z.boolean().optional(),
    region: z.boolean().optional(),
    postalCode: z.boolean().optional(),
    bio: z.boolean().optional(),
  })
  .strict()

export const ProfileSelectObjectSchema = Schema
