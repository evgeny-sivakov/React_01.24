import classes from './Button.module.css'

export const Button = ({ className, text }) => {
  return <button className={(classes.button, className)}>{text}</button>
}
