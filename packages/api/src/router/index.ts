import { router } from '../trpc'
import { authRouter } from '../router/auth'
import { amenitiesRouter, listingsRouter, picturesRouter, propertiesRouter } from '../prisma-autogen/routers'

export const appRouter = router({
  auth: authRouter,
  properties: propertiesRouter,
  listings: listingsRouter,
  amenities: amenitiesRouter,
  pictures: picturesRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
