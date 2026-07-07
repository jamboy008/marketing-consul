import React from 'react'

function Button({ text, onClick, variant }) {
  const variants = {
    primary: ' btn-primary ',
  }
  return (
    <button className={`${variants[variant] || ''} btn w-full`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button