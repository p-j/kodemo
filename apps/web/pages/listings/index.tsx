import { Prisma, type Listing, type Property, type Picture } from '@prisma/client'
import { appRouter } from '@kodemo/api'
import { createProxySSGHelpers } from '@trpc/react-query/ssg'
import { prisma } from '@kodemo/database'
import { transformer } from '@kodemo/api/transformer'
import { trpc } from '~/src/utils/trpc'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@kodemo/ui'

const include = Prisma.validator<Prisma.ListingInclude>()({
  property: { include: { pictures: { where: { order: 0 } } } },
})

export async function getStaticProps() {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: {
      session: null,
      prisma,
    },
    transformer,
  })

  await ssg.listings.findManyListing.prefetch({ include })

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: false,
  }
}

type ListingWithProperty = Listing & { property: Property & { pictures: Picture[] } }

export default function ListingsPage() {
  const { data: sessionData } = trpc.auth.getSession.useQuery()
  const { status, data: listings } = trpc.listings.findManyListing.useQuery<
    ListingWithProperty[],
    ListingWithProperty[]
  >({
    include,
  })
  if (status !== 'success') return <>Loading...</>
  return (
    <div tw="bg-white">
      <Header user={sessionData?.user} />
      <div tw="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" tw="sr-only">
          Products
        </h2>

        <div tw="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {listings.map((listing, index) => (
            <Link key={listing.id} href={`/listings/${listing.id}`} className="group">
              <div tw="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                <Image
                  priority={index < 2}
                  src={listing.property.pictures[0]?.src ?? 'https://dummyimage.com/384x384/eee/aaa'}
                  alt={listing.property.title}
                  width={384}
                  height={256}
                  tw="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div tw="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{listing.property.title}</h3>
                <p>{listing.price} €</p>
              </div>

              <p tw="mt-1 text-sm italic text-gray-500  ">
                <span tw="inline-block h-16 text-ellipsis overflow-hidden float-left">
                  {listing.property.description}
                </span>
                ...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
