import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../store/quiz-context'

import Button from './Button'

import classes from './Question.module.css'

const response = [
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
]

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

const Question = () => {
  const { countCorrectAnswer, countAnswer } = useContext(QuizContext)
  const [questionIndex, setQuestionIndex] = useState(0)

  const navigate = useNavigate()

  function answerSubmitHandler(event) {
    event.preventDefault()

    const {
      target: { innerText }
    } = event

    innerText === correct_answer ? countCorrectAnswer() : countAnswer()

    if (response.length - 1 > questionIndex) {
      setQuestionIndex((prev) => prev + 1)
    } else {
      navigate('/results')
    }
  }

  const { question, correct_answer, incorrect_answers } = response[questionIndex]
  const shuffledAnswers = shuffle([...incorrect_answers, correct_answer])

  return (
    <>
      <p className={classes.question}>{question}</p>
      <form className={classes.grid}>
        {shuffledAnswers.map((answer) => (
          <Button
            onClick={answerSubmitHandler}
            className={classes.answerButton}
            key={answer}
            text={answer}
          />
        ))}
      </form>
    </>
  )
}

export default Question
