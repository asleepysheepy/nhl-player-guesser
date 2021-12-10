import React from 'react'
import { useGameStateContext, useRostersContext } from '../../lib'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function isCurrent(navItem, selectedTeam) {
  if (navItem === 'National Hockey League' && selectedTeam === 'league') {
    return true
  } else if (navItem === selectedTeam) {
    return true
  } else {
    return false
  }
}

export function SidebarItem({ item }) {
  const { rosters } = useRostersContext()
  const { gameState, updateGameState } = useGameStateContext()

  const handleOnClick = () => {
    if (item.name === 'National Hockey League') {
      updateGameState({ type: 'setDefault' })
    } else {
      updateGameState({
        type: 'setTeam',
        payload: {
          team: rosters?.teams.find((t) => t.name === item.name),
        },
      })
    }
  }

  return (
    <button
      className={classNames(
        'group flex items-center p-1 text-sm font-medium rounded-md text-white w-full',
        isCurrent(item.name, gameState.team) ? 'bg-blue-800' : 'hover:bg-blue-600 hover:bg-opacity-75',
      )}
      onClick={handleOnClick}
    >
      <item.icon
        aria-hidden={'true'}
        className={'flex-shrink-0'}
        height={'1.5rem'}
        width={'1.5rem'}
      />
      <span className={'ml-3'}>{item.name}</span>
    </button>
  )
}
