import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
