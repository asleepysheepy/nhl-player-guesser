import React, { StrictMode } from 'react'
import { ErrorBoundary, Layout } from './components'
import { GameStateContextProvider, RostersContextProvider } from './lib'
import { HomePage } from './pages/home'

function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <RostersContextProvider>
          <GameStateContextProvider>
            <Layout>
              <HomePage />
            </Layout>
          </GameStateContextProvider>
        </RostersContextProvider>
      </ErrorBoundary>
    </StrictMode>
  )
}

export { App }
