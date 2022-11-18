import { z } from 'zod'

export const ProfileScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'address',
  'country',
  'city',
  'region',
  'postalCode',
  'bio',
])
