import classes from './PageContent.module.css'

export const PageContent = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <div className={classes.titleBackground}>
        <h1 className={classes.title}>{title}</h1>
      </div>
      {children}
    </div>
  )
}
