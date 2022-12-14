import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut } from 'next-auth/react'
import { trpc } from '~/src/utils/trpc'
// const PostCard: React.FC<{
//   post: inferProcedureOutput<AppRouter['post']['all']>[number]
// }> = ({ post }) => {
//   return (
//     <div tw="p-4 border-2 border-gray-500 rounded-lg max-w-2xl hover:scale-[101%] transition-all">
//       <h2 tw="text-2xl font-bold text-gray-800">{post.title}</h2>
//       <p tw="text-gray-600">{post.content}</p>
//     </div>
//   )
// }

const Home: NextPage = () => {
  // const postQuery = trpc.post.all.useQuery()

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw="container flex flex-col items-center min-h-screen py-16 mx-auto">
        <h1 tw="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Create <span tw="text-indigo-500">T3</span> Turbo
        </h1>
        <AuthShowcase />

        {/* <div tw="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">
          {postQuery.data ? (
            <div tw="flex flex-col gap-4">
              {postQuery.data?.map((p) => {
                return <PostCard key={p.id} post={p} />
              })}
            </div>
          ) : (
            <p>Loading..</p>
          )}
        </div> */}
      </main>
    </>
  )
}

export default Home

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = trpc.auth.getSession.useQuery()

  return (
    <div tw="flex items-center justify-between gap-8">
      {sessionData && (
        <div>
          <p tw="text-2xl text-indigo-500">Logged in as {sessionData?.user?.name}</p>
          <p tw="text-sm text-gray-500">Id: {sessionData?.user?.id}</p>
        </div>
      )}
      <button
        tw="px-4 py-2 text-xl bg-indigo-500 border border-indigo-700 rounded-md shadow-lg text-violet-100 hover:bg-indigo-700"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )
}
