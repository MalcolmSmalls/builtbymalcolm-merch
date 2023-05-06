import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import videoBG from '../assets/avocado.mp4'

const navigation = [
  { name: 'Apparel', href: '#' },
  { name: 'Accessories', href: '#' },
  { name: 'Music', href: '#' },
  { name: 'Tour', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className='hidden lg:flex lg:gap-x-12 lg:justify-center lg:h-20 lg:bg-black lg:items-center'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-xxl font-semibold leading-6 text-gray-200 uppercase'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='w-full h-[100vh]'>
          <video
            src={videoBG}
            autoPlay
            loop
            muted
            className='w-[100%] h-[100%] object-cover '
          />
          <div className='absolute w-full h-full top-20 left-0 bg-black/30'></div>
          <div className='absolute w-full h-full flex flex-col justify-center top-20 items-center'>
            <h1 className='text-9xl text-white tracking-tight font-bold uppercase'>
              Shop Big Chop
            </h1>
          </div>
        </div>
      </nav>
    </header>
  )
}
