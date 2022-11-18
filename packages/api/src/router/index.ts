import { router } from '../trpc'
import { authRouter } from '../router/auth'
import {
  amenitiesRouter,
  filesRouter,
  listingsRouter,
  picturesRouter,
  profilesRouter,
  propertiesRouter,
  usersRouter,
} from '../prisma-autogen/routers'

export const appRouter = router({
  auth: authRouter,
  properties: propertiesRouter,
  listings: listingsRouter,
  amenities: amenitiesRouter,
  pictures: picturesRouter,
  files: filesRouter,
  profile: profilesRouter,
  user: usersRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
