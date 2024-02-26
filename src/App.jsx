import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/Register' element = {<Register></Register>}></Route>
        <Route path='/Login' element = {<Login></Login>}></Route>
      </Routes>
    </>
  )
}

export default App
