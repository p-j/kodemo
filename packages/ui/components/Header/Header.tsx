import Image from 'next/image'
import { useState } from 'react'
import { MobileMenu, PrimaryNavigation } from './Navigation'

export interface IHeaderProps {
  user?: {
    name?: string | null
  }
}
export function Header({ user, children }: React.PropsWithChildren<IHeaderProps>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      {/* Mobile menu */}
      <MobileMenu show={mobileMenuOpen} setShow={setMobileMenuOpen} user={user} />

      {/* Hero section */}
      <div tw="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" tw="absolute inset-0 overflow-hidden">
          <Image
            width={2400}
            height={children ? 1600 : 64}
            priority
            src={
              children
                ? '/images/anthony-persegol-lMasliEzBVI-unsplash4K.jpg'
                : '/images/anthony-persegol-lMasliEzBVI-unsplashH200.jpg'
            }
            alt=""
            tw="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" tw="absolute inset-0 bg-gray-900 opacity-50" />

        {/* Navigation */}
        <PrimaryNavigation user={user} setMobileMenuOpen={setMobileMenuOpen} />
        {children}
      </div>
    </>
  )
}
