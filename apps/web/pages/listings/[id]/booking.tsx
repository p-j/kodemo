import { type User, type Profile, type File, type Listing } from '@prisma/client'
import { prisma } from '@kodemo/database'
import { transformer } from '@kodemo/api/transformer'
import { Header, Redirect } from '@kodemo/ui'
import { createProxySSGHelpers } from '@trpc/react-query/ssg'
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { appRouter as router } from '@kodemo/api'
import { trpc } from '~/src/utils/trpc'
import { UserCircleIcon, UserGroupIcon, HomeModernIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import tw from 'twin.macro'
import { css } from '@stitches/react'
import { Field, FieldProps, Form, Formik } from 'formik'
import { Session } from 'next-auth'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Tab } from '@headlessui/react'
import { useState } from 'react'

type ProfileIncludeUserIncludeFiles = Profile & { user: User & { files: File[] } }

export const getStaticPaths: GetStaticPaths = async () => {
  const listings = await prisma.listing.findMany({ select: { id: true } })
  return { paths: listings.map((listing) => ({ params: { id: listing.id } })), fallback: 'blocking' }
}

export async function getStaticProps(context: GetStaticPropsContext<{ id: string }>) {
  if (typeof context.params?.id !== 'string') return { redirect: { destination: '/listings', permanent: false } }

  const ssg = createProxySSGHelpers({ router, ctx: { session: null, prisma }, transformer })
  const id = context.params?.id as string
  await ssg.listings.findUniqueListing.prefetch({ where: { id } })
  return { props: { trpcState: ssg.dehydrate(), id }, revalidate: false }
}

export default function BookingPage({ id }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  const listingQuery = trpc.listings.findUniqueListing.useQuery({ where: { id } }, { enabled: typeof id === 'string' })
  const sessionQuery = trpc.auth.getSession.useQuery()
  const profileQuery = trpc.profile.findUniqueProfile.useQuery<
    ProfileIncludeUserIncludeFiles,
    ProfileIncludeUserIncludeFiles
  >(
    { where: { userId: sessionQuery.data?.user.id }, include: { user: { include: { files: true } } } },
    { enabled: !!sessionQuery.data?.user.id },
  )

  if (typeof id !== 'string') return <Redirect to="/listings" />
  if (sessionQuery.status === 'success' && !sessionQuery.data?.user) return <Redirect to={`/listings/${id}`} />
  if (listingQuery.status !== 'success' || profileQuery.status !== 'success') return <>Loading...</>
  if (listingQuery.data?.state !== 'AVAILABLE') return <Redirect to={`/listings/${id}`} />

  return (
    <div tw="bg-gray-100">
      {sessionQuery.data?.user && (
        <>
          <Header user={sessionQuery.data.user} />
          <div tw="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div tw="lg:grid lg:grid-cols-12 lg:gap-x-5 pt-2">
              <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <aside tw="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
                  <nav tw="space-y-1">
                    <Tab.List>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            css(
                              selected
                                ? tw`bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white`
                                : tw`text-gray-900 hover:text-gray-900 hover:bg-gray-50`,
                              tw`outline-none w-full`,
                            )(),
                          )
                        }
                      >
                        <a
                          href="#"
                          className={classNames(
                            'group',
                            css(tw`rounded-md px-3 py-2 flex items-center text-sm font-medium ring-0`)(),
                          )}
                        >
                          <UserCircleIcon
                            className={classNames(css(tw`flex-shrink-0 -ml-1 mr-3 h-6 w-6`)())}
                            aria-hidden="true"
                          />
                          <span tw="truncate">Personal information</span>
                        </a>
                      </Tab>
                      <Tab
                        disabled={!profileQuery.data}
                        className={({ selected }) =>
                          classNames(
                            css(
                              selected
                                ? tw`bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white`
                                : tw`text-gray-900 hover:text-gray-900 hover:bg-gray-50`,
                              tw`outline-none w-full disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed`,
                            )(),
                          )
                        }
                      >
                        <a
                          href="#"
                          className={classNames(
                            'group',
                            css(
                              !profileQuery.data ? tw`cursor-not-allowed` : {},
                              tw`rounded-md px-3 py-2 flex items-center text-sm font-medium ring-0`,
                            )(),
                          )}
                        >
                          <UserGroupIcon
                            className={classNames(css(tw`flex-shrink-0 -ml-1 mr-3 h-6 w-6`)())}
                            aria-hidden="true"
                          />
                          <span tw="truncate">Profile</span>
                        </a>
                      </Tab>
                      {/* <Tab
                        disabled={!profileQuery.data?.bio}
                        className={({ selected }) =>
                          classNames(
                            css(
                              selected
                                ? tw`bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white`
                                : tw`text-gray-900 hover:text-gray-900 hover:bg-gray-50`,
                              tw`outline-none w-full disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed`,
                            )(),
                          )
                        }
                      >
                        <a
                          href="#"
                          className={classNames(
                            'group',
                            css(
                              !profileQuery.data?.bio ? tw`cursor-not-allowed` : {},
                              tw`rounded-md px-3 py-2 flex items-center text-sm font-medium ring-0`,
                            )(),
                          )}
                        >
                          <HomeModernIcon
                            className={classNames(css(tw`flex-shrink-0 -ml-1 mr-3 h-6 w-6`)())}
                            aria-hidden="true"
                          />
                          <span tw="truncate">Booking</span>
                        </a>
                      </Tab> */}
                    </Tab.List>
                  </nav>
                </aside>

                <div tw="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                  <Tab.Panels>
                    <Tab.Panel>
                      <PersonalInformationForm
                        profile={profileQuery.data}
                        user={sessionQuery.data.user}
                        onSubmit={() => setSelectedIndex(1)}
                      />
                    </Tab.Panel>
                    <Tab.Panel>
                      <ProfileForm
                        listingId={id}
                        profile={profileQuery.data}
                        user={sessionQuery.data.user}
                        onSubmit={() => {
                          // setSelectedIndex(2)
                          router.push(`/listings/${id}`)
                        }}
                      />
                    </Tab.Panel>
                    {/* <Tab.Panel>
                      <BookForm listing={listingQuery.data} profile={profileQuery.data} user={sessionQuery.data.user} />
                    </Tab.Panel> */}
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export interface IPersonalInformationFormProps {
  profile: ProfileIncludeUserIncludeFiles | undefined
  user: Session['user']
  onSubmit: () => void
}
function PersonalInformationForm({ profile, user, onSubmit }: IPersonalInformationFormProps) {
  const personalInitialValues = {
    fullName: user.name ?? '',
    email: user.email ?? '',
    country: profile?.country ?? '',
    address: profile?.address ?? '',
    city: profile?.city ?? '',
    region: profile?.region ?? '',
    postalCode: profile?.postalCode ?? '',
  }

  const upsertProfile = trpc.profile.upsertOneProfile.useMutation()
  const updateUser = trpc.user.updateOneUser.useMutation()

  return (
    <Formik
      initialValues={personalInitialValues}
      onSubmit={({ address, city, country, fullName, postalCode, region }) => {
        const profile = {
          address,
          city,
          country,
          postalCode,
          region,
        }

        updateUser.mutate({
          where: { id: user.id },
          data: { name: fullName },
        })

        upsertProfile.mutate({
          where: { userId: user.id },
          create: { ...profile, user: { connect: { id: user.id } } },
          update: profile,
        })

        if (onSubmit) onSubmit()
      }}
    >
      <Form>
        <div tw="shadow sm:overflow-hidden sm:rounded-md">
          <div tw="space-y-6 bg-white py-6 px-4 sm:p-6">
            <div>
              <h3 tw="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p tw="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
            </div>

            <div tw="grid grid-cols-6 gap-6">
              <div tw="col-span-6 sm:col-span-3">
                <label htmlFor="fullName" tw="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <Field
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  tw="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div tw="col-span-6 sm:col-span-3">
                <label htmlFor="email" tw="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  tw="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed"
                  disabled
                />
              </div>

              <div tw="col-span-6 sm:col-span-3">
                <label htmlFor="country" tw="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <Field name="country">
                  {({ field }: FieldProps<string>) => (
                    <select
                      tw="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      id="country"
                      autoComplete="country-name"
                      {...field}
                    >
                      <option value="FR">France</option>
                      <option value="BE">Belgium</option>
                      <option value="IT">Italy</option>
                      <option value="ES">Spain</option>
                    </select>
                  )}
                </Field>
              </div>

              <div tw="col-span-6">
                <label htmlFor="address" tw="block text-sm font-medium text-gray-700">
                  Street address
                </label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="street-address"
                  tw="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div tw="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" tw="block text-sm font-medium text-gray-700">
                  City
                </label>
                <Field
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  tw="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div tw="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="region" tw="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <Field
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  tw="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div tw="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postalCode" tw="block text-sm font-medium text-gray-700">
                  ZIP / Postal code
                </label>
                <Field
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  autoComplete="postal-code"
                  tw="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div tw="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              tw="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export interface IProfileFormProps {
  profile: ProfileIncludeUserIncludeFiles | undefined
  user: Session['user']
  listingId: string
  onSubmit: () => void
}
export function ProfileForm({ profile, user, listingId, onSubmit }: IProfileFormProps) {
  const updateProfile = trpc.profile.updateOneProfile.useMutation()
  if (!profile) return <Redirect to={`/listings/${listingId}/booking`} />
  const initialValues = { bio: profile.bio ?? '' }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ bio }) => {
        console.log('bio:', bio)
        updateProfile.mutate(
          {
            where: { id: profile.id },
            data: { bio },
          },
          { onSuccess: () => onSubmit && onSubmit() },
        )
      }}
    >
      <Form>
        <div tw="shadow sm:overflow-hidden sm:rounded-md">
          <div tw="space-y-6 bg-white py-6 px-4 sm:p-6">
            <div>
              <h3 tw="text-lg font-medium leading-6 text-gray-900">Profile</h3>
              <p tw="mt-1 text-sm text-gray-500">
                This information may be displayed publicly so be careful what you share.
              </p>
            </div>

            <div tw="grid grid-cols-3 gap-6">
              <div tw="col-span-3">
                <label htmlFor="bio" tw="block text-sm font-medium text-gray-700">
                  About you
                </label>
                <div tw="mt-1">
                  <Field name="bio">
                    {({ field }: FieldProps<string>) => (
                      <textarea
                        id="bio"
                        rows={3}
                        tw="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Hi, I'm Alex and I'm a law student..."
                        {...field}
                      />
                    )}
                  </Field>
                </div>
                <p tw="mt-2 text-sm text-gray-500">Brief description for yourself.</p>
              </div>

              <div tw="col-span-3">
                <label tw="block text-sm font-medium text-gray-700">Photo</label>
                <div tw="mt-1 flex items-center">
                  <span tw="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    {user.image ? (
                      <Image
                        src={`https://res.cloudinary.com/demo/image/fetch/${user.image}`}
                        width={48}
                        height={48}
                        alt="Your profile picture"
                      />
                    ) : (
                      <svg tw="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </span>
                  <label htmlFor="avatar-upload" tw="relative  ">
                    <span tw="ml-5 rounded-md border  py-2 px-3 text-sm font-medium leading-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-slate-50 text-slate-500 border-slate-200 shadow-none cursor-not-allowed">
                      Change
                    </span>
                    <input id="avatar-upload" name="avatar-upload" type="file" tw="sr-only" disabled />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div tw="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              tw="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

// export interface IBookFormProps {
//   profile: ProfileIncludeUserIncludeFiles | undefined
//   user: Session['user']
//   listing: Listing
// }
// export function BookForm({ profile, user, listing }: IBookFormProps) {
//   const router = useRouter()
//   const updateProfile = trpc.profile.updateOneProfile.useMutation()
//   if (!profile) return <Redirect to={`/listings/${listing.id}/booking`} />
//   listing.state
//   const initialValues = { from: listing.from, duration: listing.duration ?? 'P6M' }
//   return <>Book form</>
// }
