import React from 'react'

export function TextInput(props) {
  return (
    <div className={props.className}>
      <label className={'block text-base font-medium'} htmlFor={props.id}>
        {props.label}
      </label>
      <div className={'mt-1'}>
        <input
          className={'shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-500 rounded-md bg-white dark:bg-gray-800'}
          id={props.id}
          name={props.name ?? props.label}
          onChange={props.onChange}
          placeholder={props.placeholder ?? ''}
          type={props.type ?? 'text'}
          value={props.value}
        />
      </div>
    </div>
  )
}
