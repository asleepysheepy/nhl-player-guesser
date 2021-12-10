import React from 'react'
import { SidebarFooter } from './sidebar-footer'
import { SidebarHeader } from './sidebar-header'
import { SidebarItem } from './sidebar-item'

export function SidebarDesktop({ navItems }) {
  return (
    <div className={'hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'}>
      <div className={'flex-1 flex flex-col min-h-0 bg-blue-700'}>
        <div className={'flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'}>
          <SidebarHeader />
          <nav className={'mt-5 flex-1 px-2 space-y-1'}>
            {navItems.map((item) =>
              <SidebarItem item={item} key={item.name} />,
            )}
          </nav>
        </div>
        <SidebarFooter />
      </div>
    </div>
  )
}
