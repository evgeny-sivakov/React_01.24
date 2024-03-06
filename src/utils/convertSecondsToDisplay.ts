interface FunctionReturn {
  minutes: number
  seconds: number
}

function convertSecondsToDisplay(seconds: number): FunctionReturn {
  const secondsToDisplay = seconds % 60
  const minutesToDisplay = (seconds - secondsToDisplay) / 60

  return {
    minutes: minutesToDisplay,
    seconds: secondsToDisplay
  }
}

export default convertSecondsToDisplay
