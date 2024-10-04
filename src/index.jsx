import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, ProjectsPage, ResumePage, HobbiesPage } from './assets/Routes.jsx'

const router = createBrowserRouter([
  {path:"/self-intro", element:<HomePage />},
  {path:"/projects", element:<ProjectsPage />},
  {path:"/resume",element:<ResumePage />},
  {path:"/hobbies",element:<HobbiesPage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
