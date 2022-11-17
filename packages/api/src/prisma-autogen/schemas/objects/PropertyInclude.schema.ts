import { z } from 'zod'
import { AmenityFindManySchema } from '../findManyAmenity.schema'
import { ListingFindManySchema } from '../findManyListing.schema'
import { PictureFindManySchema } from '../findManyPicture.schema'
import { UserArgsObjectSchema } from './UserArgs.schema'
import { PropertyCountOutputTypeArgsObjectSchema } from './PropertyCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PropertyInclude> = z
  .object({
    amenities: z.union([z.boolean(), z.lazy(() => AmenityFindManySchema)]).optional(),
    listings: z.union([z.boolean(), z.lazy(() => ListingFindManySchema)]).optional(),
    pictures: z.union([z.boolean(), z.lazy(() => PictureFindManySchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PropertyCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const PropertyIncludeObjectSchema = Schema
