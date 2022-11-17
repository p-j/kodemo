import { z } from 'zod'
import { AmenityFindManySchema } from '../findManyAmenity.schema'
import { ListingFindManySchema } from '../findManyListing.schema'
import { PictureFindManySchema } from '../findManyPicture.schema'
import { UserArgsObjectSchema } from './UserArgs.schema'
import { PropertyCountOutputTypeArgsObjectSchema } from './PropertyCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertySelect> = z
  .object({
    id: z.boolean().optional(),
    amenities: z.union([z.boolean(), z.lazy(() => AmenityFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    description: z.boolean().optional(),
    roomCount: z.boolean().optional(),
    bedroomCount: z.boolean().optional(),
    floor: z.boolean().optional(),
    floorCount: z.boolean().optional(),
    surface: z.boolean().optional(),
    totalSurface: z.boolean().optional(),
    hasElevator: z.boolean().optional(),
    listings: z.union([z.boolean(), z.lazy(() => ListingFindManySchema)]).optional(),
    pictures: z.union([z.boolean(), z.lazy(() => PictureFindManySchema)]).optional(),
    reference: z.boolean().optional(),
    rentType: z.boolean().optional(),
    title: z.boolean().optional(),
    type: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => PropertyCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const PropertySelectObjectSchema = Schema
