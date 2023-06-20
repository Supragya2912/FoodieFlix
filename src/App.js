import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {CartProvider} from './components/ContextReducer'

function App() {
  return (
   
     <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </CartProvider>

        </>
    
  );
}

export default App;
