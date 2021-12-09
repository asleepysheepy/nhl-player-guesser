import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.error(error) // eslint-disable-line no-console
    return { hasError: true }
  }

  render() {
    if (!this.state.hasError) { return this.props.children }

    return (
      <div className={'text-lg mt-20 text-center'}>
        <h1 className={'my-2 text-3xl font-semibold text-gray-900 dark:text-white'}>Something went wrong.</h1>
        <p>Please refresh the page and try again.</p>
        <p>If the problem presists, seek help.</p>
      </div>
    )
  }
}
