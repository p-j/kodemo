import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ProfileCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    address: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    region: z.string().optional().nullable(),
    postalCode: z.string().optional().nullable(),
    bio: z.string().optional().nullable(),
  })
  .strict()

export const ProfileCreateManyUserInputObjectSchema = Schema
