import React from 'react'
import Home from './p/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shopol from './p/Shopol'
import Whys from './p/Whys'
import Testnonil from './p/Testnonil'
import Contact from './p/ContacT'
import Prodctes from './p/Prodctes'
import ProductDetail from './p/ProductDetail'


function App() {
  return (


    <>

<BrowserRouter>

<Routes>

<Route index element={<Home/>}/>
<Route path='/shopol' element={<Shopol/>}/> 
<Route path='/Whys' element={<Whys/>}/>
<Route path='/product/:id' element={<ProductDetail/>}/>
<Route path='/Testnonil'  element={<Testnonil/>}/>
<Route path='/ContacT' element={<Contact/>}/>
<Route path='/Prodctes' element={<Prodctes/>}/>







</Routes>



</BrowserRouter>




    </>


  )
}

export default App