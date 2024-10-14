import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
 
  return (
    <>
      <BrowserRouter basename="/sum-marize-app">
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Home' element= {<Home />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
   
  )
}

export default App
