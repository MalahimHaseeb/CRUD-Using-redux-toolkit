import React from 'react'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { HelmetProvider } from 'react-helmet-async';
import { Route,BrowserRouter, Routes } from 'react-router-dom'
import Read from './components/Read'
import Home from './components/Home';
import Footer from './components/Footer';
import Edit from './components/Edit';
import LoadingBarComponent from './components/LoadingBar';

const App = () => {
  return (
    
    <HelmetProvider>
    <BrowserRouter>
    <LoadingBarComponent />
     <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/create' element={<Create/>} />
      <Route exact path='/read' element={<Read/>} />
      <Route exact path='/edit/:id' element={<Edit/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
    </HelmetProvider>
      
  )
}

export default App