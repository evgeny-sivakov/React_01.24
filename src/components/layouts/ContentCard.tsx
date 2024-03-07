import { FC, ReactNode } from 'react'

import classes from './ContentCard.module.css'

interface ContentCardProps {
  children?: ReactNode
}

const ContentCard: FC<ContentCardProps> = ({ children }) => {
  return <div className={classes.contentCard}>{children}</div>
}

export default ContentCard
