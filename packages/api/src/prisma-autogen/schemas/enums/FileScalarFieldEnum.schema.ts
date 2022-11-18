import { z } from 'zod'

export const FileScalarFieldEnumSchema = z.enum(['id', 'userId', 'src'])
