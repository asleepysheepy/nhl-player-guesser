import React from 'react'
import { Button } from '.'
import { useGameStateContext, useRostersContext } from '../lib'

function TeamInfo({ rosters, teamId, gameType }) {
  if (gameType !== 'league') { return null }

  const team = rosters.teams.find((t) => t.id === teamId)

  return (
    <div className={'pb-1 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-2'}>
      <dt className={'text-sm font-medium text-gray-600 dark:text-gray-400'}>Team</dt>
      <dd className={'mt-1 text-sm sm:mt-0 sm:col-span-4'}>{team.name}</dd>
    </div>
  )
}

export function Finished() {
  const { rosters } = useRostersContext()
  const { gameState, updateGameState } = useGameStateContext()

  return (
    <main>
      <h2 className={'text-3xl font-semibold text-gray-900 dark:text-white'}>
        {'Congratulations, you\'ve finished'}
      </h2>
      <div className={'my-4 text-center'}>
        <Button onClick={() => { updateGameState({ type: 'reset' }) }}>Play again</Button>
      </div>
      <ul className={'divide-y divide-gray-300 dark:divide-gray-600'} role={'list'}>
        {gameState.entries.map((entry) => (
          <li className={'py-4 flex items-center'} key={entry.playerId}>
            <img
              alt={`${entry?.playerName} headshot`}
              src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${entry?.playerId}.jpg`}
            />
            <dl className={'ml-3'}>
              <TeamInfo
                gameType={gameState.team}
                rosters={rosters}
                teamId={entry.teamId}
              />
              <div className={'pb-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-2'}>
                <dt className={'text-sm font-semibold text-gray-600 dark:text-gray-400'}>Player</dt>
                <dd className={'mt-1 text-sm sm:mt-0 sm:col-span-4'}>{entry.playerName}</dd>
              </div>
              <div className={'pt-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-2'}>
                <dt className={'text-sm font-semibold text-gray-600 dark:text-gray-400'}>Guess</dt>
                <dd className={'mt-1 text-sm sm:mt-0 sm:col-span-4'}>{entry.guess}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </main>
  )
}

