import { z } from 'zod'
import { AmenityUncheckedCreateNestedManyWithoutPropertiesInputObjectSchema } from './AmenityUncheckedCreateNestedManyWithoutPropertiesInput.schema'
import { ListingUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './ListingUncheckedCreateNestedManyWithoutPropertyInput.schema'
import { PictureUncheckedCreateNestedManyWithoutPropertyInputObjectSchema } from './PictureUncheckedCreateNestedManyWithoutPropertyInput.schema'
import { RentTypeSchema } from '../enums/RentType.schema'
import { PropertyTypeSchema } from '../enums/PropertyType.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    amenities: z.lazy(() => AmenityUncheckedCreateNestedManyWithoutPropertiesInputObjectSchema).optional(),
    createdAt: z.date().optional(),
    description: z.string(),
    roomCount: z.number(),
    bedroomCount: z.number(),
    floor: z.number().optional().nullable(),
    floorCount: z.number().optional().nullable(),
    surface: z.number(),
    totalSurface: z.number().optional().nullable(),
    hasElevator: z.boolean().optional().nullable(),
    listings: z.lazy(() => ListingUncheckedCreateNestedManyWithoutPropertyInputObjectSchema).optional(),
    pictures: z.lazy(() => PictureUncheckedCreateNestedManyWithoutPropertyInputObjectSchema).optional(),
    reference: z.string(),
    rentType: z.lazy(() => RentTypeSchema),
    title: z.string(),
    type: z.lazy(() => PropertyTypeSchema),
    updatedAt: z.date().optional(),
  })
  .strict()

export const PropertyUncheckedCreateWithoutUserInputObjectSchema = Schema
