import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FirstPage from './pages/FirstPage';
import FormPage from './pages/FormPage';
import CardPage from './pages/CardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/card" element={<CardPage />} />
        {/* 다른 페이지 라우트 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
