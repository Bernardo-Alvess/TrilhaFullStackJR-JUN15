import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home'
import { UserProjects } from './pages/UserProjects'
import { Login } from './pages/login'
import { SignUp } from './pages/sign-up'
import { Project } from './pages/project'
import { EditProjet } from './pages/edit-projects'
import { ProtectedRoute } from './auth/protectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/user-projects',
    element: <ProtectedRoute element={<UserProjects />} />
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
  },
  {
    path: '/edit',
    element: <ProtectedRoute element={<EditProjet />} />
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
