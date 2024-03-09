import { describe, expect, test } from '@jest/globals'
import convertSecondsToDisplay from './convertSecondsToDisplay'

describe('convert to display function', () => {
  test('converts 234 to {minutes: 3, seconds: 54}', () => {
    const { seconds, minutes } = convertSecondsToDisplay(234)
    expect(minutes).toBe(3)
    expect(seconds).toBe(54)
  })
})
