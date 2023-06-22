import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {CartProvider} from './components/ContextReducer'
import Orders from './components/Orders'

function App() {
  return (
   
     <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myOrderData" element={<Orders/>}/>
        </Routes>
        </CartProvider>

        </>
    
  );
}

export default App;
