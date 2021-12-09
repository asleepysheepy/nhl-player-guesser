import React, { StrictMode } from 'react'
import { ErrorBoundary, Layout } from './components'
import { Guesser } from './components/guesser'
import { RostersContextProvider } from './lib'

function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <RostersContextProvider>
          <Layout>
            <Guesser />
          </Layout>
        </RostersContextProvider>
      </ErrorBoundary>
    </StrictMode>
  )
}

export { App }
