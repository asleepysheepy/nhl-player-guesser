
import React, { createContext, useContext, useReducer } from 'react'

const GameStateContext = createContext()

const initialState = {
  team: 'league',
  total: 32,
  correct: 0,
  completed: 0,
  entries: [],
}

function reducer(state, action) {

  switch (action.type) {
  case 'setDefault':
    return initialState
  case 'reset':
    return {
      ...state,
      correct: 0,
      completed: 0,
      entries: [],
    }
  case 'setTeam':
    return {
      team: action.payload.team.name,
      total: action.payload.team.players.length,
      correct: 0,
      completed: 0,
      entries: [],
    }
  case 'correctGuess':
    return {
      ...state,
      correct: state.correct + 1,
      completed: state.completed + 1,
      entries: [...state.entries, action.payload],
    }
  case 'incorrectGuess':
    return {
      ...state,
      completed: state.completed + 1,
      entries: [...state.entries, action.payload],
    }
  default:
    throw new Error()
  }
}

export function useGameStateContext() {
  return useContext(GameStateContext)
}

export function GameStateContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GameStateContext.Provider value={{ gameState: state, updateGameState: dispatch }}>
      {children}
    </GameStateContext.Provider>
  )
}
