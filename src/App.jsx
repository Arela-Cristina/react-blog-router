import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./assets/Layouts/DefaultLayout.jsx"
import Home from "./assets/Pages/Home-Page.jsx"
import About from "./assets/Pages/About-Us.jsx"
import Posts from "./assets/Pages/Posts-List.jsx"


import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Header y Footer are here */}
          <Route element={<DefaultLayout />}> 

            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Posts" element={<Posts />} />

          </Route>

        </Routes >
      </BrowserRouter>
    </>
  )
}

export default App
