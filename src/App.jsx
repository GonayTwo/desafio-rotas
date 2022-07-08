// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

import './App.css';
import React from 'react';
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Contato from './Components/Contato';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Produtos />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
