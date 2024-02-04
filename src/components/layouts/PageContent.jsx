import classes from './PageContent.module.css'

export const PageContent = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <h1 className={classes.title}>{title}</h1>
      {children}
    </div>
  )
}
