import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import classes from './EndQuizModal.module.css'
import Button from './Button'

const EndQuizModal = forwardRef(function Modal(props, ref) {
  const navigate = useNavigate()
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  function confirmationHanlder() {
    navigate('/')
  }
  return createPortal(
    <dialog ref={dialog} className={classes.dialog}>
      <p>Do you want to finish this quiz?</p>
      <form method="dialog">
        <Button text="Cancel" type="submit" />
        <Button text="Confirm" type="button" onClick={confirmationHanlder} />
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default EndQuizModal
