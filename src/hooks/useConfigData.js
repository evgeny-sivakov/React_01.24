import { useSelector } from 'react-redux'

export const useConfigData = () => {
  const store = useSelector((state) => state.config)

  const basicURL = 'https://opentdb.com/api.php?'
  let query = ''

  const configProperties = Object.entries(store)
  configProperties
    .filter((prop) => prop[0] !== 'category')
    .filter((prop) => prop[0] !== 'time')
    .forEach((prop) => {
      if (prop[0] === 'categoryID') {
        prop[0] = 'category'
      }
      if (prop[1] !== 'Any') {
        const path = query === undefined ? `${prop[0]}=${prop[1]}` : `&${prop[0]}=${prop[1]}`
        query += path
      }
    })

  return { url: basicURL + query }
}
