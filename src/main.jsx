import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Login from './Views/Login.jsx'
import About from './Views/About.jsx'
import Contact from './Views/Contact.jsx'
import AddVideo from './Views/AddVideo.jsx'
import Player from './Views/Player.jsx'
import AuthenticatedHome from './Views/AuthenticatedHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/authenticated/about" element={<About />} />
      <Route path="/authenticated/contact" element={<Contact />} />
      <Route path="/add-video" element={<AddVideo />} />
      <Route path="/play-video" element={<Player />} />
      <Route path="/authenticated/home" element={<AuthenticatedHome />} />
      <Route path="/authenticated/add-video" element={<AddVideo />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
