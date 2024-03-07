
import './pages/main.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import {contentCategory} from './pages/contentCategory'
import { NavBar } from './components/NavBar';
import {BrowserRouter as Router, Routes,  Route, Navigate } from "react-router-dom"
import { useUser } from './context/userContext';

function App() {

  const {user}= useUser()

  const Private = ({children})=>{
    return  user.login? children:<Navigate to= "/auth"/>
  }

  return (
    
    <>
    <main className='container-main'>
      <NavBar/>     
      <Router>
        <Routes>
          <Route path='/auth' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/contentCategory' element={<contentCategory/>}/>
          <Route path='/' element={<Login/>}/>

        </Routes>


  
      </Router>


    </main>
      </>
  )
}

export default App
