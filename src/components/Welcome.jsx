import WelcomeForm from './WelcomeForm'

import classes from './Welcome.module.css'

const Welcome = ({ inputs }) => {
  return (
    <div className={classes.container}>
      <WelcomeForm inputs={inputs} />
      <a className={classes.link} href="#">
        See my statistics
      </a>
    </div>
  )
}

export default Welcome
