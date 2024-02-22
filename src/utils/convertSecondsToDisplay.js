function convertSecondsToDisplay(seconds) {
  const secondsToDisplay = seconds % 60
  const minutesToDisplay = (seconds - secondsToDisplay) / 60

  return {
    minutes: minutesToDisplay,
    seconds: secondsToDisplay
  }
}

export default convertSecondsToDisplay
