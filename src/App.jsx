import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./assets/Layouts/DefaultLayout.jsx"
import Home from "./assets/Pages/Home-Page.jsx"
import About from "./assets/Pages/About-Us.jsx"
import Index from "./assets/Pages/posts/Posts-List.jsx"
import Show from "./assets/Pages/posts/PostsShow.jsx"
import Create from "./assets/Pages/posts/PostCreate.jsx"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Header & Footer are here */}
          <Route element={<DefaultLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* ruta API */}
            <Route path="/blog">
              <Route index Component={Index}></Route>
              <Route path=':id' Component = {Show}></Route>
              <Route path='create' Component = {Create}></Route>
            </Route>

            <Route path="*" element={<div>404 :v</div>} />
          </Route>

        </Routes >
      </BrowserRouter>
    </>
  )
}

export default App
