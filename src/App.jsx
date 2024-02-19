import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PageContent from './components/layouts/PageContent'
import WelcomePage from './pages/WelcomePage'
import QuizPage from './pages/QuizPage'
import QuizResultPage from './pages/QuizResultPage'
import StatisticPage from './pages/StatisticsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContent />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: 'quiz', element: <QuizPage /> },
      { path: 'results', element: <QuizResultPage /> },
      { path: 'statistics', element: <StatisticPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
