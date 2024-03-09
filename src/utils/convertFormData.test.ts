import convertFormData from './convertFormData'

const defaultTestData = {
  amount: 'How many questions?',
  category: 'Choose a category',
  categoryID: undefined,
  difficulty: 'Choose a difficulty',
  type: 'Choose type of answer',
  time: 'Define quiz duration'
}

const definedTestData = {
  amount: '12',
  category: 'General Knowledge',
  categoryID: 9,
  difficulty: 'Easy',
  type: 'Multiple Choice',
  time: '1'
}

describe('convert form data to pass it the store', () => {
  test('converts default form configuration', () => {
    const { amount, category, categoryID, difficulty, type, time } =
      convertFormData(defaultTestData)
    expect(amount).toBe(10)
    expect(category).toBe('Any')
    expect(categoryID).toBe('Any')
    expect(difficulty).toBe('Any')
    expect(type).toBe('Any')
    expect(time).toBe(5)
  })

  test('converts defined by user form configuration', () => {
    const { amount, category, categoryID, difficulty, type, time } =
      convertFormData(definedTestData)
    expect(amount).toBe(10)
    expect(category).toBe('General Knowledge')
    expect(categoryID).toBe(9)
    expect(difficulty).toBe('easy')
    expect(type).toBe('multiple')
    expect(time).toBe(1)
  })
})
