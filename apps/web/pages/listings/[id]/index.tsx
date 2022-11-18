import { Prisma, type Listing, type Property, type Picture } from '@prisma/client'
import { prisma } from '@kodemo/database'
import { createProxySSGHelpers } from '@trpc/react-query/ssg'
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { appRouter } from '@kodemo/api'
import { transformer } from '@kodemo/api/transformer'
import { trpc } from '~/src/utils/trpc'
import Image from 'next/image'
import { Header } from '@kodemo/ui'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

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
  const rendered = new Date()
  const ssg = createProxySSGHelpers({
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
      rendered: rendered.toString(),
    },
    revalidate: false,
  }
}

export default function ListingPage({ id, rendered }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { status, data: listing } = trpc.listings.findUniqueListing.useQuery<ListingWithProperty, ListingWithProperty>({
    include,
    where: { id },
  })
  const { data: sessionData } = trpc.auth.getSession.useQuery()
  if (status !== 'success') return <>Loading...</>
  return (
    <div tw="bg-white">
      <Header user={sessionData?.user} />
      <div tw="relative">
        <div aria-hidden="true" tw="relative">
          <Image
            priority
            src={listing.property.pictures[0]?.src ?? '/images/anthony-persegol-lMasliEzBVI-unsplash.jpg'}
            width={2400}
            height={1600}
            alt=""
            tw="h-96 w-full object-cover object-center"
          />
          <div tw="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
        <div tw="absolute top-0 right-0 text-right px-2 italic bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter p-4 sm:(rounded-bl-lg) ">
          Page rendered: {new Date(rendered).toISOString()}
        </div>
        <div tw="relative m-auto max-w-7xl">
          <div tw="absolute xl:(right-6 bottom-6) sm:(right-4 bottom-4) bottom-0 right-0 bg-white bg-opacity-10 backdrop-blur-sm backdrop-filter p-4 sm:(rounded-lg shadow-md) border">
            <div tw="px-4 py-5 sm:p-6">
              {listing.state === 'AVAILABLE' ? (
                <>
                  <h3 tw="text-lg font-medium leading-6 text-gray-900">Book this gem</h3>
                  <div tw="mt-2 sm:flex sm:items-center sm:justify-between">
                    <div tw="max-w-xl text-sm text-gray-500">
                      <p>We will guide you through the whole process</p>
                    </div>
                    <div tw="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
                      {sessionData?.user ? (
                        <Link
                          href={`/listings/${listing.id}/booking`}
                          tw="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                        >
                          Book now
                        </Link>
                      ) : (
                        <button
                          onClick={() => signIn()}
                          tw="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                        >
                          Sign in
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3 tw="text-lg font-medium leading-6 text-gray-900">Unavailable</h3>
                  <div tw="mt-2 sm:flex sm:items-center sm:justify-between">
                    <div tw="max-w-xl text-sm text-gray-500">
                      <p>This property is currently unavailable</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div tw="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8 prose">
        <div tw="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 tw="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{listing.property.title}</h2>
          <p tw="mt-4 text-gray-500 whitespace-pre-wrap text-left">{listing.property.description}</p>
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
