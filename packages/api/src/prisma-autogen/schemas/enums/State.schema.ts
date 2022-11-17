import { z } from 'zod'

export const StateSchema = z.enum(['AVAILABLE', 'UNAVAILABLE'])
