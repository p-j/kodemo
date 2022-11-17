import { prisma } from '.'
import { User, Prisma, PropertyType, RentType, State } from '@prisma/client'
import { Convert, Koliving } from './preseed/koliving'
import json from './preseed/data.json'

const koliving = Convert.toKoliving(JSON.stringify(json))

const OWNER = {
  name: 'John Owner',
  email: 'jrm@pkr.sh',
  image: 'https://avatars.githubusercontent.com/u/1537324?v=4',
}

const USER = {
  name: 'Jack User',
  email: 'hi@pkr.sh',
  image: 'https://avatars.githubusercontent.com/u/660059?v=4',
}

const DEFAULT_USERS: (Partial<User> & { email: string })[] = [OWNER, USER]
const AMENITIES = koliving.reduce(
  (
    acc,
    {
      data: {
        property: { amenities },
      },
    },
  ) => {
    amenities.map((name) => acc.add({ name }))
    return acc
  },
  new Set<Prisma.AmenityCreateInput>(),
)

const DEFAULT_PROPERTIES: Prisma.PropertyCreateInput[] = koliving.map(({ data: { property } }) => ({
  title: property.title,
  description: property.description ?? undefined,
  reference: property.propertyIdNumber.toString(),
  type: property.type === 'apt' ? PropertyType.APPARTMENT : PropertyType.HOUSE,
  rentType: property.rentType === 'ENTIRE' ? RentType.FULL : RentType.SHARED,

  roomCount: property.nbRooms,
  bedroomCount: property.nbBedrooms,
  floor: property.floor,
  floorCount: property.nbFloors,
  surface: property.surface,
  totalSurface: property.surfaceTotal,
  hasElevator: property.hasElevator,

  user: {
    connectOrCreate: {
      create: OWNER,
      where: { email: OWNER.email },
    },
  },

  amenities: {
    connectOrCreate: property.amenities.map((name) => ({
      where: { name },
      create: { name },
    })),
  },

  listings: {
    create: [
      {
        from: property.rentInfos.availableAt,
        price: property.rentInfos.price,
        utilities: property.rentInfos.utilities,
        state: property.rentInfos.isAvailable ? State.AVAILABLE : State.UNAVAILABLE,
      },
    ],
  },
  createdAt: property.createdAt ?? undefined,
  updatedAt: property.updatedAt ?? undefined,
}))

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

    await Promise.all(
      Array.from(AMENITIES).map((amenity) =>
        prisma.amenity.upsert({
          where: { name: amenity.name },
          update: { ...amenity },
          create: { ...amenity },
        }),
      ),
    )
    const owner = await prisma.user.findFirst({ where: { email: OWNER.email } })
    await Promise.all(
      DEFAULT_PROPERTIES.map((property) =>
        prisma.property.upsert({
          where: { reference: property.reference },
          update: {
            ...property,
            pictures: {
              createMany: {
                skipDuplicates: true,
                data: owner
                  ? koliving
                      .find(({ data: { property: p } }) => p.propertyIdNumber.toString() === property.reference)
                      ?.data.property.pictures.map((picture) => ({
                        src: picture.url,
                        order: picture.position,
                        userId: owner.id,
                      })) ?? []
                  : [],
              },
            },
          },
          create: {
            ...property,
            pictures: {
              createMany: {
                skipDuplicates: true,
                data: owner
                  ? koliving
                      .find(({ data: { property: p } }) => p.propertyIdNumber.toString() === property.reference)
                      ?.data.property.pictures.map((picture) => ({
                        src: picture.url,
                        order: picture.position,
                        userId: owner.id,
                      })) ?? []
                  : [],
              },
            },
          },
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
