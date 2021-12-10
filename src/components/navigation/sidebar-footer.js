import React from 'react'

export function SidebarFooter() {
  return (
    <div className={'flex-shrink-0 flex border-t border-blue-800 p-2'}>
      <a
        className={'w-full p-2 text-sm font-medium rounded-md text-white hover:bg-blue-600 hover:bg-opacity-75'}
        href={'https://github.com/asleepysheepy/nhl-player-guesser'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        View on GitHub
      </a>
    </div>
  )
}
