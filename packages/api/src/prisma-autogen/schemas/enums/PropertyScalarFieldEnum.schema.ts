import { z } from 'zod'

export const PropertyScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'description',
  'roomCount',
  'bedroomCount',
  'floor',
  'floorCount',
  'surface',
  'totalSurface',
  'hasElevator',
  'reference',
  'rentType',
  'title',
  'type',
  'updatedAt',
  'userId',
])
