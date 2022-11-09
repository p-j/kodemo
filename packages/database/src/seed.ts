import { prisma } from '.'

import type { User, Feature, Picture, Property, PropertyFeature } from '@prisma/client'

const DEFAULT_USERS: (Partial<User> & { email: string })[] = [
  {
    name: 'John Owner',
    email: 'jrm@pkr.sh',
    image: 'https://avatars.githubusercontent.com/u/1537324?v=4',
  },
  {
    name: 'Jack User',
    email: 'hi@pkr.sh',
    image: 'https://avatars.githubusercontent.com/u/660059?v=4',
  },
]

const DEFAULT_PROPERTIES: Partial<Property>[] = []
const DEFAULT_FEATURES: Partial<Feature>[] = []
const DEFAULT_PICTURES: Partial<Picture>[] = []

;(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.upsert({
          where: { email: user.email },
          update: { ...user },
          create: { ...user },
        }),
      ),
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
