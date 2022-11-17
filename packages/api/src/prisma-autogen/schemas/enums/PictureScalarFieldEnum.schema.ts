import { z } from 'zod'

export const PictureScalarFieldEnumSchema = z.enum([
  'id',
  'src',
  'propertyId',
  'userId',
  'order',
  'createdAt',
  'updatedAt',
])
