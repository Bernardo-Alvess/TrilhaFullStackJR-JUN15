import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home'
import { UserProjects } from './pages/user-projects'
import { Login } from './pages/login'
import { SignUp } from './pages/sign-up'
import { Project } from './pages/project'
import { EditProjet } from './pages/edit-projects'
import { ProtectedRoute } from './auth/protected-route'
import { CreateProject } from './pages/create-project'

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
    path: '/create-project',
    element: <ProtectedRoute element={<CreateProject />} />
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
