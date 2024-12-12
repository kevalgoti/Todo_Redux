import React from 'react'

function Input({type, name , placeholder, value, onChange, disabled }) {
  return (
    <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
    />
  )
}

export default Input