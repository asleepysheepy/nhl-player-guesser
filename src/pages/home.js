import React from 'react'
import { Finished, Guesser, Loader } from '../components'
import { useGameStateContext, useRostersContext } from '../lib'

export function HomePage() {
  const { loading, error } = useRostersContext()
  const { gameState } = useGameStateContext()

  if (error) { throw new Error() }

  let Component = Guesser
  if (loading) { Component = Loader }
  if (gameState.completed === gameState.total) { Component = Finished }

  return (
    <div className={'flex flex-col items-center'}>
      <h1 className={' my-4 text-5xl font-semibold text-gray-900 dark:text-white'}>NHL Player Guesser</h1>

      <div className={'my-3 flex flex-col items-center'}>
        <p>{`${gameState.completed}/${gameState.total} completed`}</p>
        <p>{`${gameState.correct}/${gameState.completed} correct`}</p>
      </div>

      <Component />
    </div>
  )
}
