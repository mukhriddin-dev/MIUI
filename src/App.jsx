import React from 'react';
import ResponsiveAppBar from './components/appbar/AppBar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import SimpleContainer from './components/UI/Container/Container';
import Products from './components/Products/Products';

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <SimpleContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

        </Routes>
      </SimpleContainer>
    </>
  );
};

export default App;