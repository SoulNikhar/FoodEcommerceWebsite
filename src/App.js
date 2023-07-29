import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'; 
import Zrough from './Zrough';
import Main from './Main';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
function App() {
  return (
    <div className="App" >
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Zrough/>}/>
        <Route path='/main' element={<Main/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path= '/login' element={<Login/>}/>  
        <Route path='/signup' element={<Signup/>}/> 
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
