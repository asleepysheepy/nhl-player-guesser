import React, { useEffect, useState } from 'react'
import { Button, TextInput } from '.'
import { getNextPlayer, useGameStateContext, useRostersContext } from '../lib'

export function Guesser() {
  const { rosters } = useRostersContext()
  const { gameState, updateGameState } = useGameStateContext()
  const [guessedPlayer, setGuessedPlayer] = useState('')

  const [currentPlayer, setCurrentPlayer] = useState()
  useEffect(() => {
    if (gameState.completed === gameState.total) { return }

    setCurrentPlayer(getNextPlayer(rosters, gameState))
  }, [rosters, gameState])

  const onResetPress = () => { updateGameState({ type: 'reset' }) }
  const onSubmitPress = () => {
    if (guessedPlayer === '') { return }

    const payload = { playerId: currentPlayer.id, teamId: currentPlayer.teamId }

    if (currentPlayer.name.toLowerCase() === guessedPlayer.toLowerCase()) {
      updateGameState({ type: 'correctGuess', payload})
    } else {
      updateGameState({ type: 'incorrectGuess', payload})
    }

    setGuessedPlayer('')
  }

  if (!rosters.teams) { return null }

  return (
    <>
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
    </>
  )
}
