import React from 'react'
import image from './image.jpg'
import logo from './logo.png'

export const Navbar = () => {
  return (
    <div className="bg-cover bg-center h-auto" style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={logo} alt=""/>
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 font-semibold  text-white">About Us</a>
            <a href="#" className="text-sm/6 font-semibold  text-white">Living Room</a>
            <a href="#" className="text-sm/6 font-semibold text-white">Kitchen</a>
            <a href="#" className="text-sm/6 font-semibold text-white">Outdoors</a>
            <a href="#" className="text-sm/6 font-semibold text-white">Contact</a>
          </div>
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5">
                <span className="sr-only">Close menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About Us</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Living Room</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"> Kitchen</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Outdoors</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contact</a>
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-7xl font-bold tracking-tight text-white line-height-50">Coming Home Never Felt So Good!</h1>
            <p className="mt-8 text-pretty text-lg italic text-white sm:text-xl/8">Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="bg-rose-600 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-rose-700">FIND YOUR STYLE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
