import React from 'react';
import { FixturesPage, MainPage, StandingsPage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fixtures" element={<FixturesPage />} />
        <Route path="/standings" element={<StandingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
