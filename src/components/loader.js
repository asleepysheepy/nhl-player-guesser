import React from 'react'

export function Loader({ text = 'Loading...' }) {
  return (
    <div className={'fixed inset-0 z-10 w-screen h-screen flex flex-col justify-center items-center bg-black bg-opacity-50'}>
      <h1 className={'text-5xl font-medium text-white mb-8'}>
        {text}
      </h1>
      <div className={'loader-spinner'} />
    </div>
  )
}
