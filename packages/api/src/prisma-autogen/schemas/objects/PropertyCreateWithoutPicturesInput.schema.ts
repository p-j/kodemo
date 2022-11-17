import { z } from 'zod'
import { AmenityCreateNestedManyWithoutPropertiesInputObjectSchema } from './AmenityCreateNestedManyWithoutPropertiesInput.schema'
import { ListingCreateNestedManyWithoutPropertyInputObjectSchema } from './ListingCreateNestedManyWithoutPropertyInput.schema'
import { RentTypeSchema } from '../enums/RentType.schema'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'
import { UserCreateNestedOneWithoutPropertiesInputObjectSchema } from './UserCreateNestedOneWithoutPropertiesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyCreateWithoutPicturesInput> = z
  .object({
    id: z.string().optional(),
    amenities: z.lazy(() => AmenityCreateNestedManyWithoutPropertiesInputObjectSchema).optional(),
    createdAt: z.date().optional(),
    description: z.string(),
    roomCount: z.number(),
    bedroomCount: z.number(),
    floor: z.number().optional().nullable(),
    floorCount: z.number().optional().nullable(),
    surface: z.number(),
    totalSurface: z.number().optional().nullable(),
    hasElevator: z.boolean().optional().nullable(),
    listings: z.lazy(() => ListingCreateNestedManyWithoutPropertyInputObjectSchema).optional(),
    reference: z.string(),
    rentType: z.lazy(() => RentTypeSchema),
    title: z.string(),
    type: z.lazy(() => PropertyTypeSchema),
    updatedAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutPropertiesInputObjectSchema),
  })
  .strict()

export const PropertyCreateWithoutPicturesInputObjectSchema = Schema
