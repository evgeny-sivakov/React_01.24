import classes from './Button.module.css'

const Button = ({ className, text, type }) => {
  return (
    <button className={(classes.button, className)} type={type}>
      {text}
    </button>
  )
}

export default Button
