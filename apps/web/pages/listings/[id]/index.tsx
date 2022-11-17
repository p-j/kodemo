import { Prisma, type Listing, type Property, type Picture } from '@prisma/client'
import { prisma } from '@kodemo/database'
import { createProxySSGHelpers } from '@trpc/react-query/ssg'
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { appRouter } from '@kodemo/api'
import { transformer } from '@kodemo/api/transformer'
import { trpc } from '~/src/utils/trpc'
import Image from 'next/image'
import { Header } from '@kodemo/ui'

type ListingWithProperty = Listing & { property: Property & { pictures: Picture[] } }
const include = Prisma.validator<Prisma.ListingInclude>()({
  property: { include: { pictures: { where: { order: 0 } } } },
})

export const getStaticPaths: GetStaticPaths = async () => {
  const listings = await prisma.listing.findMany({
    select: { id: true },
  })

  return {
    paths: listings.map((listing) => ({
      params: { id: listing.id },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps(context: GetStaticPropsContext<{ id: string }>) {
  const ssg = await createProxySSGHelpers({
    router: appRouter,
    ctx: {
      session: null,
      prisma,
    },
    transformer,
  })
  const id = context.params?.id as string

  await ssg.listings.findUniqueListing.prefetch({ include, where: { id } })

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
    revalidate: false,
  }
}

export default function ListingPage({ id }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { status, data: listing } = trpc.listings.findUniqueListing.useQuery<ListingWithProperty, ListingWithProperty>({
    include,
    where: { id },
  })
  const { data: sessionData } = trpc.auth.getSession.useQuery()
  if (status !== 'success') return <>Loading...</>
  return (
    <div tw="bg-white">
      <Header user={sessionData?.user} />
      <div aria-hidden="true" tw="relative">
        <Image
          src={listing.property.pictures[0]?.src ?? '/images/anthony-persegol-lMasliEzBVI-unsplash.jpg'}
          width={2400}
          height={1600}
          alt=""
          tw="h-96 w-full object-cover object-center"
        />
        <div tw="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div tw="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div tw="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 tw="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{listing.property.title}</h2>
          <p tw="mt-4 text-gray-500 whitespace-pre">{listing.property.description}</p>
        </div>

        <dl tw="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          <div tw="border-t border-gray-200 pt-4">
            <dt tw="font-medium text-gray-900"># Rooms</dt>
            <dd tw="mt-2 text-sm text-gray-500">{listing.property.roomCount}</dd>
          </div>
          <div tw="border-t border-gray-200 pt-4">
            <dt tw="font-medium text-gray-900"># Bedrooms</dt>
            <dd tw="mt-2 text-sm text-gray-500">{listing.property.bedroomCount}</dd>
          </div>

          {listing.property.floor !== null && (
            <div tw="border-t border-gray-200 pt-4">
              <dt tw="font-medium text-gray-900">Floor</dt>
              <dd tw="mt-2 text-sm text-gray-500">
                {listing.property.floor} / {listing.property.floorCount}
                {listing.property.hasElevator ? 'with elevator' : 'without elevator'}
              </dd>
            </div>
          )}

          <div tw="border-t border-gray-200 pt-4">
            <dt tw="font-medium text-gray-900">Surface</dt>
            <dd tw="mt-2 text-sm text-gray-500">{listing.property.totalSurface}m²</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
