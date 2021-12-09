import React, { useEffect, useState } from 'react'
import { Button, Loader, TextInput } from '.'
import { getNextPlayer, useGameState, useRostersContext } from '../lib'

export function Guesser() {
  const { rosters, loading, error } = useRostersContext()
  const { gameState, updateGameState } = useGameState()
  const [guessedPlayer, setGuessedPlayer] = useState('')

  const [currentPlayer, setCurrentPlayer] = useState()
  useEffect(() => { setCurrentPlayer(getNextPlayer(rosters, gameState)) }, [rosters, gameState])

  const onResetPress = () => { updateGameState({ type: 'reset' }) }
  const onSubmitPress = () => {
    const payload = {
      playerId: currentPlayer.id,
      teamId: currentPlayer.teamId,
    }

    if (currentPlayer.name === guessedPlayer) {
      updateGameState({ type: 'correctGuess', payload})
    } else {
      updateGameState({ type: 'incorrectGuess', payload})
    }

    setGuessedPlayer('')
  }

  if (loading) { return <Loader /> }
  if (error) { throw new Error() }
  if (!rosters.teams) { return null }

  return (
    <div className={'flex flex-col items-center'}>
      <h1 className={' my-4 text-5xl font-semibold text-gray-900 dark:text-white'}>NHL Player Guesser</h1>

      <div className={'my-3 flex flex-col items-center'}>
        <p>{`${gameState.completed}/${gameState.total} completed`}</p>
        <p>{`${gameState.correct}/${gameState.completed} correct`}</p>
      </div>

      <img
        alt={`${currentPlayer?.name} headshot`}
        src={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${currentPlayer?.id}@2x.jpg`}
      />

      <form
        className={'my-4'}
        onSubmit={(e) => {
          onSubmitPress()
          e.preventDefault()
        }}
      >
        <TextInput
          id={'player-name-field'}
          label={'Who is this?'}
          onChange={(e) => { setGuessedPlayer(e.target.value) }}
          placeholder={'Wayne Gretzky'}
          value={guessedPlayer}
        />

        <div className={'flex justify-evenly my-3'}>
          <Button onClick={onSubmitPress}>Guess</Button>
          <Button onClick={onResetPress} variant={'secondary'}>Reset</Button>
        </div>
      </form>
    </div>
  )
}
