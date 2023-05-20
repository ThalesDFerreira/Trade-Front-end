import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
