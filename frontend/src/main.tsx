import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Home from "./pages/Home.tsx"
import Public from "./pages/Public.tsx"
import Personal from './pages/Personal.tsx'
import Privacy from './pages/Privacy.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>}/>
      <Route path="public" element={<Public/>}/>
      <Route path="personal" element={<Personal/>}/>
      <Route path="privacy" element={<Privacy/>}/> 
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
