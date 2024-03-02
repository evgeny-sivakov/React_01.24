import { Outlet } from 'react-router-dom'

import classes from './PageContent.module.css'

const PageContent = () => {
  return (
    <main className={classes.main}>
      <Outlet />
    </main>
  )
}

export default PageContent
