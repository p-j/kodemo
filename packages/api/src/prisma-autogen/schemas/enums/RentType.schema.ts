import { z } from 'zod'

export const RentTypeSchema = z.enum(['SHARED', 'FULL'])
