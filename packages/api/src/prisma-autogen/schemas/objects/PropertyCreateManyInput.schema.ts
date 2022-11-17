import { z } from 'zod'
import { RentTypeSchema } from '../enums/RentType.schema'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    description: z.string(),
    roomCount: z.number(),
    bedroomCount: z.number(),
    floor: z.number().optional().nullable(),
    floorCount: z.number().optional().nullable(),
    surface: z.number(),
    totalSurface: z.number().optional().nullable(),
    hasElevator: z.boolean().optional().nullable(),
    reference: z.string(),
    rentType: z.lazy(() => RentTypeSchema),
    title: z.string(),
    type: z.lazy(() => PropertyTypeSchema),
    updatedAt: z.date().optional(),
    userId: z.string(),
  })
  .strict()

export const PropertyCreateManyInputObjectSchema = Schema
