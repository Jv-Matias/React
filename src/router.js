import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login'
import Cliente from'./pages/Cliente';
import Produtos from './pages/Produtos'
import Home from './pages/Home'

import Menu from './Components/menu/index'


function Router() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/cliente" element={<Cliente />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;