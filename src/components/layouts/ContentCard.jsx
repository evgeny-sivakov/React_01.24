import classes from './ContentCard.module.css'

const ContentCard = ({ children }) => {
  return <div className={classes.contentCard}>{children}</div>
}

export default ContentCard
