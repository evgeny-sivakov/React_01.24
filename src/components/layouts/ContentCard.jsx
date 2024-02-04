import classes from './ContentCard.module.css'

export const ContentCard = ({ children }) => {
  return <div className={classes.contentCard}>{children}</div>
}
