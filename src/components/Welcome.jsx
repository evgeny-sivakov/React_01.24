import { Link } from 'react-router-dom'

import WelcomeForm from './WelcomeForm'

import classes from './Welcome.module.css'

const Welcome = ({ inputs }) => {
  return (
    <div className={classes.container}>
      <WelcomeForm inputs={inputs} />
      <Link className={classes.link} to="/statistics">
        See my statistics
      </Link>
    </div>
  )
}

export default Welcome
