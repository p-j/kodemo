import { z } from 'zod'

export const ListingScalarFieldEnumSchema = z.enum([
  'id',
  'propertyId',
  'state',
  'from',
  'duration',
  'price',
  'utilities',
  'createdAt',
  'updatedAt',
])
