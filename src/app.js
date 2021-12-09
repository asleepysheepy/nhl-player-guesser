import React, { StrictMode } from 'react'
import { ErrorBoundary, Layout } from './components'
import { RostersContextProvider } from './contexts'

function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <RostersContextProvider>
          <Layout>
            <h1>Hello World!</h1>
          </Layout>
        </RostersContextProvider>
      </ErrorBoundary>
    </StrictMode>
  )
}

export { App }
