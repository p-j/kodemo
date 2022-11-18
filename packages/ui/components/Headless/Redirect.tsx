import { useRouter } from 'next/router'

export function Redirect({ to }: { to: string }) {
  const router = useRouter()
  if (!router || typeof window === 'undefined') return null
  router.push(to)
  return null
}
