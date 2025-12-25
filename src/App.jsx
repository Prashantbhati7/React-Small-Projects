import { useState } from 'react'
import { BrowserRouter,Routes,Route, ScrollRestoration } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import { Accordian, Home } from './Pages'
import StarRating from './Pages/Project2/StarRating'
import ImageSlider from './Pages/Project3/ImageSlider'
import InfiniteScroll from './Pages/Project4/infiniteScroll'

import Productpage from './Pages/Project4/Productpage'
import Treeview from './Pages/Project5/Treeview'
import QrCodeGenertaor from './Pages/Project6/QrCodeGenertaor'
import ScrollIndicator from './Pages/Project7/ScrollIndicator'
import Tabs from './Pages/Project8/tabs'
import PopUp from './Pages/Project9/PopUp'
import ScrolltoSection from './Pages/Project10/ScrolltoSection'
import ThemeSwitcher from './Pages/Project11/ThemeSwitcher'
function App() {
  
  return (<>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/project1' element={<Accordian/>}></Route>
            <Route path='/project2' element={<StarRating/>}></Route>
            <Route path='/project3' element={<ImageSlider/>}></Route>
            <Route path='/project4' >
              <Route path='product' element={<InfiniteScroll/>} />
              <Route path='product/:id' element={<Productpage/>}></Route>
            </Route>
            <Route path='/project5' element={<Treeview/>}></Route>
            <Route path='/project6' element={<QrCodeGenertaor/>}></Route>
            <Route path='/project7' element={<ScrollIndicator/>}></Route>
            <Route path='/project8' element={<Tabs/> }></Route>
            <Route path='/project9' element={<PopUp></PopUp>}></Route>
            <Route path='/project10' element={<ScrolltoSection/>}></Route>
            <Route path='/project11' element={<ThemeSwitcher/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  </>)
}

export default App
