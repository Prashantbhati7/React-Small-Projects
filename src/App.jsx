import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import { Accordian, Home } from './Pages'
import StarRating from './Pages/Project2/StarRating'
function App() {
  
  return (<>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/project1' element={<Accordian/>}></Route>
            <Route path='/project2' element={<StarRating/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  </>)
}

export default App
