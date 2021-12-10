import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { SidebarFooter } from './sidebar-footer'
import { SidebarHeader } from './sidebar-header'
import { SidebarItem } from './sidebar-item'
import { XIcon } from '@heroicons/react/outline'

export function SidebarMobile({ isSidebarOpen, setSidebarOpen, navItems }) {
  return (
    <Transition.Root as={Fragment} show={isSidebarOpen}>
      <Dialog
        as={'div'} className={'fixed inset-0 flex z-40 md:hidden'}
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter={'transition-opacity ease-linear duration-300'}
          enterFrom={'opacity-0'}
          enterTo={'opacity-100'}
          leave={'transition-opacity ease-linear duration-300'}
          leaveFrom={'opacity-100'}
          leaveTo={'opacity-0'}
        >
          <Dialog.Overlay className={'fixed inset-0 bg-gray-600 bg-opacity-75'} />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter={'transition ease-in-out duration-300 transform'}
          enterFrom={'-translate-x-full'}
          enterTo={'translate-x-0'}
          leave={'transition ease-in-out duration-300 transform'}
          leaveFrom={'translate-x-0'}
          leaveTo={'-translate-x-full'}
        >
          <div className={'relative flex-1 flex flex-col max-w-xs w-full bg-blue-700'}>
            <Transition.Child
              as={Fragment}
              enter={'ease-in-out duration-300'}
              enterFrom={'opacity-0'}
              enterTo={'opacity-100'}
              leave={'ease-in-out duration-300'}
              leaveFrom={'opacity-100'}
              leaveTo={'opacity-0'}
            >
              <div className={'absolute top-0 right-0 -mr-12 pt-2'}>
                <button
                  className={'ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'}
                  onClick={() => setSidebarOpen(false)}
                  type={'button'}
                >
                  <span className={'sr-only'}>Close sidebar</span>
                  <XIcon aria-hidden={'true'} className={'h-6 w-6 text-white'} />
                </button>
              </div>
            </Transition.Child>
            <div className={'flex-1 h-0 pt-5 pb-4 overflow-y-auto'}>
              <SidebarHeader />
              <nav className={'mt-5 px-2 space-y-1'}>
                {navItems.map((item) =>
                  <SidebarItem item={item} key={item.name} />,
                )}
              </nav>
            </div>
            <SidebarFooter />
          </div>
        </Transition.Child>
        <div aria-hidden={'true'} className={'flex-shrink-0 w-14'} />
      </Dialog>
    </Transition.Root>
  )
}
