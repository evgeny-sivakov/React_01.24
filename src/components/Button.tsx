import { FC, FormEvent } from 'react'

import classes from './Button.module.css'

interface ButtonCustomProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: (event: FormEvent) => void
  className?: string
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: FC<ButtonCustomProps> = ({ onClick, className, text, type }) => {
  return (
    <button onClick={onClick} className={(classes.button, className)} type={type}>
      {text}
    </button>
  )
}

export default Button
