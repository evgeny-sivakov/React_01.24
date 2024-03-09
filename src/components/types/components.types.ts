export interface QuestionItem {
  type: 'boolean' | 'multiple'
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface Input {
  inputID: 'amount' | 'category' | 'difficulty' | 'type' | 'time'
  options: string[] | { id: string; name: string }[]
  label: string
  key: string
}

export interface FormDataType {
  amount: string
  category: string
  categoryID: undefined | number
  difficulty: string
  type: string
  time: string
}

export interface ConvertedFormData {
  amount: number
  category: string
  categoryID: string | number
  difficulty: string
  type: string
  time: number
}
