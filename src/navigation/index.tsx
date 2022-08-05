import React from 'react';
import { MainPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
