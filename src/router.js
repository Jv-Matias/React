import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login'
import Vanila from'./pages/Vanilla'
import Mobile from './pages/Mobile'
import Front from './pages/Front'
import Home from './pages/Home'

import Menu from './Components/menu/index'


function Router() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/front" element={<Front />} />
          <Route path="/vanila" element={<Vanila />} />
          <Route path="/mobile" element={<Mobile />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;