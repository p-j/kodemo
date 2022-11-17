import globalStyles from '~/src/styles/globalStyles'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import { DefaultSeo } from 'next-seo'
import type { AppType } from 'next/app'
import { trpc } from '~/src/utils/trpc'

const App: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  globalStyles()
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        titleTemplate="%s | Kodemo"
        defaultTitle="A Koliving demo"
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://kodemo.pkr.sh',
          siteName: 'Kodemo',
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)
