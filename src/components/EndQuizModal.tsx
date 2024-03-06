import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import Button from './Button'

import { quizActions } from '../store/quiz'
import { useAppDispatch } from '../hooks/reduxHooks'

import classes from './EndQuizModal.module.css'

export type ModalHandle = {
  open: () => void
}

const EndQuizModal = forwardRef<ModalHandle>(function Modal(props, ref) {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const dialog = useRef<HTMLDialogElement>(null)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog!.current!.showModal()
      }
    }
  })

  function confirmationHanlder() {
    dispatch(quizActions.reset())
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
    document.getElementById('modal')!
  )
})

export default EndQuizModal
