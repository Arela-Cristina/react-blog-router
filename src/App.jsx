import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Menu-Nav/Nav.jsx"
import Header from "./assets/Layouts/Header/Header.jsx"
import Footer from "./assets/Layouts/Footer/Footer.jsx"
import Home from "./assets/Pages/Home-Page.jsx"
import About from "./assets/Pages/About-Us.jsx"
import Posts from "./assets/Pages/Posts-List.jsx"


import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
