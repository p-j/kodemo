import { Header } from '@kodemo/ui'
import { trpc } from '~/src/utils/trpc'

export default function HomePage() {
  const { data: sessionData } = trpc.auth.getSession.useQuery()
  return (
    <div tw="bg-white">
      <Header user={sessionData?.user}>
        <div tw="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <h1 tw="text-4xl font-bold tracking-tight text-white lg:text-6xl">Find your apartment, here and now!</h1>
          <p tw="mt-4 text-xl text-white">
            Goodbye apartment hunting problems! With Koliving, everything is simple, fast, and happy. Enjoy your new
            life!
          </p>
          <a
            href="/listings"
            tw="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Browse the listings
          </a>
        </div>
      </Header>

      {/* 
      
      // Tailwind template stuff to be updated if I have time...


      <main>

        <section aria-labelledby="category-heading" tw="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div tw="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="category-heading" tw="text-2xl font-bold tracking-tight text-gray-900">
              Shop by Category
            </h2>
            <a href="#" tw="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div tw="mt-4 flow-root">
            <div tw="-my-2">
              <div tw="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div tw=" absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      tw="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" tw="absolute inset-0">
                        <Image
                          src={category.imageSrc}
                          alt=""
                          tw="h-full w-full object-cover object-center"
                          width={218}
                          height={320}
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        tw="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span tw="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div tw="mt-6 px-4 sm:hidden">
            <a href="#" tw="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>


        <section aria-labelledby="social-impact-heading" tw="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
          <div tw="relative overflow-hidden rounded-lg">
            <div tw="absolute inset-0">
              <Image
                width={2432}
                height={1600}
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                alt=""
                tw="h-full w-full object-cover object-center"
              />
            </div>
            <div tw="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div tw="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="social-impact-heading" tw="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span tw="block sm:inline">Level up</span>
                  <span tw="block sm:inline">your desk</span>
                </h2>
                <p tw="mt-3 text-xl text-white">
                  Make your desk beautiful and organized. Post a picture to social media and watch it get more likes
                  than life-changing announcements. Reflect on the shallow nature of existence. At least you have a
                  really nice desk setup.
                </p>
                <a
                  href="#"
                  tw="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Shop Workspace
                </a>
              </div>
            </div>
          </div>
        </section>


        <section
          aria-labelledby="collection-heading"
          tw="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
        >
          <h2 id="collection-heading" tw="text-2xl font-bold tracking-tight text-gray-900">
            Shop by Collection
          </h2>
          <p tw="mt-4 text-base text-gray-500">
            Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
          </p>

          <div tw="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {collections.map((collection) => (
              <a key={collection.name} href={collection.href} className="group" tw="block">
                <div
                  aria-hidden="true"
                  tw="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <Image
                    width={384}
                    height={461}
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    tw="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 tw="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                <p tw="mt-2 text-sm text-gray-500">{collection.description}</p>
              </a>
            ))}
          </div>
        </section>


        <section aria-labelledby="comfort-heading" tw="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div tw="relative overflow-hidden rounded-lg">
            <div tw="absolute inset-0">
              <Image
                width={2432}
                height={1600}
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                alt=""
                tw="h-full w-full object-cover object-center"
              />
            </div>
            <div tw="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div tw="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="comfort-heading" tw="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Simple productivity
                </h2>
                <p tw="mt-3 text-xl text-white">
                  Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we&apos;re doing our
                  best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the
                  undeniable urge to fill empty circles.
                </p>
                <a
                  href="#"
                  tw="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Shop Focus
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" tw="bg-gray-900">
        <h2 id="footer-heading" tw="sr-only">
          Footer
        </h2>
        <div tw="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div tw="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div tw="grid grid-cols-2 gap-8 xl:col-span-2">
              <div tw="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 tw="text-sm font-medium text-white">Shop</h3>
                  <ul role="list" tw="mt-6 space-y-6">
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} tw="text-sm">
                        <a href={item.href} tw="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 tw="text-sm font-medium text-white">Company</h3>
                  <ul role="list" tw="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} tw="text-sm">
                        <a href={item.href} tw="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div tw="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 tw="text-sm font-medium text-white">Account</h3>
                  <ul role="list" tw="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} tw="text-sm">
                        <a href={item.href} tw="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 tw="text-sm font-medium text-white">Connect</h3>
                  <ul role="list" tw="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} tw="text-sm">
                        <a href={item.href} tw="text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div tw="mt-12 md:mt-16 xl:mt-0">
              <h3 tw="text-sm font-medium text-white">Sign up for our newsletter</h3>
              <p tw="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
              <form tw="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" tw="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  tw="w-full min-w-0 appearance-none rounded-md border border-white bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                />
                <div tw="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    tw="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div tw="border-t border-gray-800 py-10">
            <p tw="text-sm text-gray-400">Copyright &copy; 2021 Kodemo, Inc.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
