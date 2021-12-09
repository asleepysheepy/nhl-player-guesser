import { useReducer } from 'react'

const initialState = {
  team: 'league',
  total: 32,
  correct: 0,
  completed: 0,
  playersIncluded: [],
  teamsIncluded: [],
}

function reducer(state, action) {
  switch (action.type) {
  case 'reset':
    return {
      ...state,
      correct: 0,
      completed: 0,
      playersIncluded: [],
      teamsIncluded: [],
    }
  case 'setTeam':
    return {
      team: action.payload.team.name,
      total: action.payload.team.players.length,
      correct: 0,
      completed: 0,
      playersIncluded: [],
      teamsIncluded: [],
    }
  case 'correctGuess':
    return {
      ...state,
      correct: state.correct++,
      completed: state.completed++,
      playersIncluded: [...state.playersIncluded, action.payload.playerId],
      teamsIncluded: [...state.teamsIncluded, action.payload.teamId],
    }
  case 'incorrectGuess':
    return {
      ...state,
      completed: state.completed++,
      playersIncluded: [...state.playersIncluded, action.payload.playerId],
      teamsIncluded: [...state.teamsIncluded, action.payload.teamId],
    }
  default:
    throw new Error()
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return {
    gameState: state,
    updateGameState: dispatch,
  }
}
