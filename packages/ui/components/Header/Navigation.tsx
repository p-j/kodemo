import { signIn, signOut } from 'next-auth/react'
import tw from 'twin.macro'
import classNames from 'classnames'
import { css } from '@stitches/react'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Dialog, Tab } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const currencies = ['EUR']
const navigation = {
  categories: [
    {
      name: 'Tenant',
      featured: [
        {
          name: 'New listing',
          href: '#',

          imageSrc: 'https://dummyimage.com/280x280/eee/aaa',
          imageAlt: 'A meaningful alt description',
        },
        {
          name: 'Koliving',
          href: '#',

          imageSrc: 'https://dummyimage.com/280x280/eee/aaa',
          imageAlt: 'A meaningful alt description',
        },
        {
          name: 'Appartment',
          href: '#',

          imageSrc: 'https://dummyimage.com/280x280/eee/aaa',
          imageAlt: 'A meaningful alt description',
        },
        {
          name: 'House',
          href: '#',

          imageSrc: 'https://dummyimage.com/280x280/eee/aaa',
          imageAlt: 'A meaningful alt description',
        },
      ],
    },
    {
      name: 'Landlord',
      featured: [
        {
          name: 'Add your property',
          href: '#',
          imageSrc: 'https://dummyimage.com/280x280/eee/aaa',
          imageAlt: 'A meaningful alt description',
        },
        {
          name: 'My Dashboard',
          href: '#',
          imageSrc: 'https://dummyimage.com/280x280/eee/aaa',
          imageAlt: 'A meaningful alt description',
        },
        {
          name: 'Something else',
          href: '#',
          imageSrc: 'https://dummyimage.com/280x280/eee/aaa',
          imageAlt: 'A meaningful alt description',
        },
        {
          name: 'Something cool',
          href: '#',
          imageSrc: 'https://dummyimage.com/280x280/eee/aaa',
          imageAlt: 'A meaningful alt description',
        },
      ],
    },
  ],
  pages: [
    { name: 'Professionel', href: '#' },
    { name: 'A propos', href: '#' },
  ],
}

export interface IPrimaryNavigationProps {
  user?: {
    name?: string | null
  }
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}
export function PrimaryNavigation({ user, setMobileMenuOpen }: IPrimaryNavigationProps) {
  return (
    <header tw="relative z-10">
      <nav aria-label="Top">
        {/* Top navigation */}
        <div tw="bg-gray-900">
          <div tw="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Currency selector */}
            <form>
              <div>
                <label htmlFor="desktop-currency" tw="sr-only">
                  Currency
                </label>
                <div
                  className="group"
                  tw="relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
                >
                  <select
                    id="desktop-currency"
                    name="currency"
                    tw="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <div tw="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                    <ChevronDownIcon tw="h-5 w-5 text-gray-300" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </form>

            <div tw="flex items-center space-x-6">
              {user ? (
                <>
                  <p tw="text-sm font-medium text-white hover:text-gray-100">
                    Logged in{user.name ? ` as ${user.name}` : ''}
                  </p>

                  <a href="#" onClick={() => signOut()} tw="text-sm font-medium text-white hover:text-gray-100">
                    Sign out
                  </a>
                </>
              ) : (
                <>
                  <a href="#" onClick={() => signIn()} tw="text-sm font-medium text-white hover:text-gray-100">
                    Sign in
                  </a>
                  <a href="#" onClick={() => signIn()} tw="text-sm font-medium text-white hover:text-gray-100">
                    Create an account
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Secondary navigation */}
        <SecondaryNavigation setMobileMenuOpen={setMobileMenuOpen} />
      </nav>
    </header>
  )
}

export interface ISecondaryNavigationProps {
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}
export function SecondaryNavigation({ setMobileMenuOpen }: ISecondaryNavigationProps) {
  return (
    <div tw="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
      <div tw="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div tw="flex h-16 items-center justify-between">
            {/* Logo (lg+) */}
            <div tw="hidden lg:flex lg:flex-1 lg:items-center">
              <Link href="/">
                <span tw="sr-only">Kodemo</span>
                <Image src="/svg/koliving.svg" height={48} width={48} alt="" tw="h-12 w-auto" />
              </Link>
            </div>

            <div tw="hidden h-full lg:flex">
              {/* Flyout menus */}
              <Popover.Group tw="inset-x-0 bottom-0 px-4">
                <div tw="flex h-full justify-center space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} tw="flex">
                      {({ open }) => (
                        <>
                          <div tw="relative flex">
                            <Popover.Button tw="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                              {category.name}
                              <span
                                className={classNames(
                                  css(
                                    open ? tw`bg-white` : {},
                                    tw`absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out`,
                                  )(),
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter={classNames(css(tw`transition ease-out duration-200`)())}
                            enterFrom={classNames(css(tw`opacity-0`)())}
                            enterTo={classNames(css(tw`opacity-100`)())}
                            leave={classNames(css(tw`transition ease-in duration-150`)())}
                            leaveFrom={classNames(css(tw`opacity-100`)())}
                            leaveTo={classNames(css(tw`opacity-0`)())}
                          >
                            <Popover.Panel tw="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div tw="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div tw="relative bg-white">
                                <div tw="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                  <div tw="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                    {category.featured.map((item) => (
                                      <div key={item.name} className="group" tw="relative">
                                        <div tw="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                          <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            height={280}
                                            width={280}
                                            tw="object-cover object-center"
                                          />
                                        </div>
                                        <a href={item.href} tw="mt-4 block font-medium text-gray-900">
                                          <span tw="absolute inset-0 z-10" aria-hidden="true" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" tw="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a key={page.name} href={page.href} tw="flex items-center text-sm font-medium text-white">
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>
            </div>

            {/* Mobile menu and search (lg-) */}
            <div tw="flex flex-1 items-center lg:hidden">
              <button type="button" tw="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                <span tw="sr-only">Open menu</span>
                <Bars3Icon tw="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Search */}
              <a href="#" tw="ml-2 p-2 text-white">
                <span tw="sr-only">Search</span>
                <MagnifyingGlassIcon tw="h-6 w-6" aria-hidden="true" />
              </a>
            </div>

            {/* Logo (lg-) */}
            <Link href="/" tw="lg:hidden">
              <span tw="sr-only">Kodemo</span>
              <Image src="/svg/koliving.svg" height={48} width={48} alt="" tw="h-12 w-auto" />
            </Link>

            <div tw="flex flex-1 items-center justify-end">
              <a href="#" tw="hidden text-sm font-medium text-white lg:block">
                Search
              </a>

              <div tw="flex items-center lg:ml-8">
                {/* Help */}
                <a href="#" tw="p-2 text-white lg:hidden">
                  <span tw="sr-only">Help</span>
                  <QuestionMarkCircleIcon tw="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" tw="hidden text-sm font-medium text-white lg:block">
                  Help
                </a>

                {/* Cart */}
                {/* <div tw="ml-4 flow-root lg:ml-8">
                          <a href="#" className="group" tw="-m-2 flex items-center p-2">
                            <ShoppingBagIcon tw="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                            <span tw="ml-2 text-sm font-medium text-white">0</span>
                            <span tw="sr-only">items in cart, view bag</span>
                          </a>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export interface IMobileMenuProps {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  user?: {
    name?: string | null
  }
}
export function MobileMenu({ show, setShow, user }: IMobileMenuProps) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as={Fragment} onClose={() => setShow(false)}>
        <div tw="relative z-40 lg:hidden">
          <Transition.Child
            as={Fragment}
            enter={classNames(css(tw`transition-opacity ease-linear duration-300`)())}
            enterFrom={classNames(css(tw`opacity-0`)())}
            enterTo={classNames(css(tw`opacity-100`)())}
            leave={classNames(css(tw`transition-opacity ease-linear duration-300`)())}
            leaveFrom={classNames(css(tw`opacity-100`)())}
            leaveTo={classNames(css(tw`opacity-0`)())}
          >
            <div tw="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div tw="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter={classNames(css(tw`transition ease-in-out duration-300 transform`)())}
              enterFrom={classNames(css(tw`-translate-x-full`)())}
              enterTo={classNames(css(tw`translate-x-0`)())}
              leave={classNames(css(tw`transition ease-in-out duration-300 transform`)())}
              leaveFrom={classNames(css(tw`translate-x-0`)())}
              leaveTo={classNames(css(tw`-translate-x-full`)())}
            >
              <Dialog.Panel as={Fragment}>
                <div tw="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div tw="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      tw="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setShow(false)}
                    >
                      <span tw="sr-only">Close menu</span>
                      <XMarkIcon tw="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as={Fragment}>
                    <div tw="mt-2">
                      <div tw="border-b border-gray-200">
                        <Tab.List tw="-mb-px flex space-x-8 px-4">
                          {navigation.categories.map((category) => (
                            <Tab
                              key={category.name}
                              className={({ selected }) =>
                                classNames(
                                  css(
                                    selected
                                      ? tw`text-indigo-600 border-indigo-600`
                                      : tw`text-gray-900 border-transparent`,
                                    tw`flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium`,
                                  )(),
                                )
                              }
                            >
                              {category.name}
                            </Tab>
                          ))}
                        </Tab.List>
                      </div>
                      <Tab.Panels as={Fragment}>
                        {navigation.categories.map((category) => (
                          <Tab.Panel key={category.name} tw="space-y-12 px-4 py-6">
                            <div tw="grid grid-cols-2 gap-x-4 gap-y-10">
                              {category.featured.map((item) => (
                                <div key={item.name} className="group" tw="relative">
                                  <div tw="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                    <Image
                                      src={item.imageSrc}
                                      alt={item.imageAlt}
                                      tw="object-cover object-center"
                                      width={280}
                                      height={280}
                                    />
                                  </div>
                                  <a href={item.href} tw="mt-6 block text-sm font-medium text-gray-900">
                                    <span tw="absolute inset-0 z-10" aria-hidden="true" />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" tw="mt-1 text-sm text-gray-500">
                                    Shop now
                                  </p>
                                </div>
                              ))}
                            </div>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </div>
                  </Tab.Group>

                  <div tw="space-y-6 border-t border-gray-200 py-6 px-4">
                    {navigation.pages.map((page) => (
                      <div key={page.name} tw="flow-root">
                        <a href={page.href} tw="-m-2 block p-2 font-medium text-gray-900">
                          {page.name}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div tw="space-y-6 border-t border-gray-200 py-6 px-4">
                    {user ? (
                      <div tw="flow-root">{user.name}</div>
                    ) : (
                      <>
                        <div tw="flow-root">
                          <a href="#" onClick={() => signIn()} tw="-m-2 block p-2 font-medium text-gray-900">
                            Create an account
                          </a>
                        </div>
                        <div tw="flow-root">
                          <a href="#" onClick={() => signIn()} tw="-m-2 block p-2 font-medium text-gray-900">
                            Sign in
                          </a>
                        </div>
                      </>
                    )}
                  </div>

                  <div tw="space-y-6 border-t border-gray-200 py-6 px-4">
                    {/* Currency selector */}
                    <form>
                      <div tw="inline-block">
                        <label htmlFor="mobile-currency" tw="sr-only">
                          Currency
                        </label>
                        <div
                          className="group"
                          tw="relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
                        >
                          <select
                            id="mobile-currency"
                            name="currency"
                            tw="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                          >
                            {currencies.map((currency) => (
                              <option key={currency}>{currency}</option>
                            ))}
                          </select>
                          <div tw="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                            <ChevronDownIcon tw="h-5 w-5 text-gray-500" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
