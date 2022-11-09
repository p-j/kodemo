import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut } from 'next-auth/react'
import { trpc } from '~/src/utils/trpc'
import type { inferProcedureOutput } from '@trpc/server'
import type { AppRouter } from '@kodemo/api'

const PostCard: React.FC<{
  post: inferProcedureOutput<AppRouter['post']['all']>[number]
}> = ({ post }) => {
  return (
    <div className="p-4 border-2 border-gray-500 rounded-lg max-w-2xl hover:scale-[101%] transition-all">
      <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
    </div>
  )
}

const Home: NextPage = () => {
  const postQuery = trpc.post.all.useQuery()

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-col items-center min-h-screen py-16 mx-auto">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Create <span className="text-indigo-500">T3</span> Turbo
        </h1>
        <AuthShowcase />

        <div className="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">
          {postQuery.data ? (
            <div className="flex flex-col gap-4">
              {postQuery.data?.map((p) => {
                return <PostCard key={p.id} post={p} />
              })}
            </div>
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </main>
    </>
  )
}

export default Home

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = trpc.auth.getSession.useQuery()

  return (
    <div className="flex items-center justify-between gap-8">
      {sessionData && (
        <div>
          <p className="text-2xl text-indigo-500">Logged in as {sessionData?.user?.name}</p>
          <p className="text-sm text-gray-500">Id: {sessionData?.user?.id}</p>
        </div>
      )}
      <button
        className="px-4 py-2 text-xl bg-indigo-500 border border-indigo-700 rounded-md shadow-lg text-violet-100 hover:bg-indigo-700"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )
}
