import classes from './Button.module.css'

const Button = ({ onClick, className, text, type }) => {
  return (
    <button onClick={onClick} className={(classes.button, className)} type={type}>
      {text}
    </button>
  )
}

export default Button
