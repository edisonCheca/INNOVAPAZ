import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
