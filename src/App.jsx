
import './pages/main.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { ContentDetails } from './pages/ContentDetails'
import { ContentCategory } from './pages/ContentCategory'
import Footer from './components/Footer'

import { NavBar } from './components/NavBar';
import {BrowserRouter as Router, Routes,  Route, Navigate } from "react-router-dom"

function App() {

  const user= JSON.parse(localStorage.getItem("user"))
  
  const Private = ({children})=>{
    return  user!=null && user.login!= false ? children:<Navigate to= "/auth"/>
  }

  return (
    
    <>
    <main className='container-main'>
      <NavBar/>     
      <Router>
        <Routes>
          <Route path='/auth' element={<Login/>}/>
          <Route path='/' element={<Private><Home/></Private>}/>
          <Route path='/contentCategory/:id?' element={<Private><ContentCategory/></Private>}/>
          <Route path='/ContentDetails/:id?' element={<Private><ContentDetails/></Private>}/>

        </Routes>
        <Footer/>

  
      </Router>


    </main>
      </>
  )
}

export default App
