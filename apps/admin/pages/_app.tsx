import globalStyles from '~/src/styles/globalStyles'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

import type { AppType } from 'next/app'
import { trpc } from '~/src/utils/trpc'

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  globalStyles()
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
