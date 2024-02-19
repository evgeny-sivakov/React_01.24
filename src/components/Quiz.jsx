import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Question from './Question'
import Button from './Button'
import Timer from './Timer'
import EndQuizModal from './EndQuizModal'
import QuestionCounter from './QuestionCounter'

import classes from './Question.module.css' // split style file

/* const response = [
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'Who wrote the 1967 horror novel &quot;Rosemary&#039;s Baby&quot;?',
    correct_answer: 'Ira Levin',
    incorrect_answers: ['Stephen King', 'Robert Bloch', 'Mary Shelley']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'Which Russian author wrote the epic novel War and Peace?',
    correct_answer: 'Leo Tolstoy',
    incorrect_answers: ['Fyodor Dostoyevsky', 'Alexander Pushkin', 'Vladimir Nabokov']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'What is the fourth book of the Old Testament?',
    correct_answer: 'Numbers',
    incorrect_answers: ['Genesis', 'Exodus', 'Leviticus']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'Which of the following was the author of &quot;Username Evie&quot;?',
    correct_answer: 'Joe Sugg',
    incorrect_answers: ['Zoe Sugg', 'Joe Weller', 'Alfie Deyes']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'What is the name of Eragon&#039;s dragon in &quot;Eragon&quot;?',
    correct_answer: 'Saphira',
    incorrect_answers: ['Glaedr', 'Thorn', 'Arya']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'Which of these book series is by James Patterson?',
    correct_answer: 'Maximum Ride',
    incorrect_answers: ['Harry Potter', 'The Legend of Xanth', 'The Bartemaeus Trilogy']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question:
      'In Michael Crichton&#039;s novel &quot;Jurassic Park&quot;, John Hammond meets his demise at the claws of which dinosaur?',
    correct_answer: 'Procompsognathus',
    incorrect_answers: ['Dilophosaurus', 'Tyrannosaurus Rex', 'Velociraptor']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'In the Lord of the Rings, who is the father of the dwarf Gimli?',
    correct_answer: 'Gloin',
    incorrect_answers: ['Thorin Oakenshield', 'Bombur', 'Dwalin']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'Who is the author of the series &quot;Malazan Book of the Fallen&quot;?',
    correct_answer: 'Steven Erikson',
    incorrect_answers: ['Ian Cameron Esslemont', 'George R. R. Martin', 'J. R. R. Tolkien']
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Books',
    question: 'Which of the following authors was not born in England? ',
    correct_answer: 'Arthur Conan Doyle',
    incorrect_answers: ['Graham Greene', 'H G Wells', 'Arthur C Clarke']
  }
] */

//https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      type: '',
      difficulty: '',
      category: '',
      question: '',
      correct_answer: '',
      incorrect_answers: []
    }
  ])
  const { amount, categoryID, difficulty, type, time } = useSelector((state) => state.config)

  const modal = useRef()
  const navigate = useNavigate()
  const requestURL = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}&type=${type}`

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(requestURL)

      if (!response.ok) {
        throw new Error('Error!')
      }

      const responseData = await response.json()
      const newQuestions = responseData.results
      setQuestions(newQuestions)
    }
    fetchQuestions().catch((error) => console.log(error))
  }, [])

  function endQuizHandler() {
    modal.current.open()
  }

  function onTimerExpired() {
    navigate('/results')
  }

  return (
    <>
      <EndQuizModal ref={modal} />
      <section className={classes.container}>
        <Timer onTimeExpired={onTimerExpired} time={time} />
        <QuestionCounter questionsLength={questions.length} />
        <Question questions={questions} />
        <Button onClick={endQuizHandler} className={classes.endButton} text="End Quiz!" />
      </section>
    </>
  )
}

export default Quiz
