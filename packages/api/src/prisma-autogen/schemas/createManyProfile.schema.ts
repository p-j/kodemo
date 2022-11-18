import { z } from 'zod'
import { ProfileCreateManyInputObjectSchema } from './objects/ProfileCreateManyInput.schema'

export const ProfileCreateManySchema = z.object({ data: ProfileCreateManyInputObjectSchema })
