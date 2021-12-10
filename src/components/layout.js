import React, { useState } from 'react'
import { Sidebar, Topbar } from '.'

export function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={'md:pl-64 flex flex-col flex-1'}>
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className={'flex-1'}>
          <div className={'py-6'}>
            <div className={'max-w-7xl mx-auto px-4 sm:px-6 md:px-8'}>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
