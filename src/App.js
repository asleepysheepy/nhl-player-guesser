import React, { StrictMode } from 'react'
import { ErrorBoundary, Layout } from './components'

function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Layout>
          <h1>Hello World!</h1>
        </Layout>
      </ErrorBoundary>
    </StrictMode>
  )
}

export { App }
