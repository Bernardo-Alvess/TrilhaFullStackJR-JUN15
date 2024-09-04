import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home'
import { Projects } from './pages/projects'
import { Login } from './pages/login'
import { SignUp } from './pages/sign-up'
import { Project } from './pages/project'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/project',
    element: <Project />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
