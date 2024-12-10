import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/Pages/Home-Page.jsx"
import Nav from "./Menu-Nav/Nav.jsx"
import About from "./assets/Pages/About-Us.jsx"
import Posts from "./assets/Pages/Posts-List.jsx"
import Footer from "./assets/Components/Footer/Footer.jsx"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes >
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
