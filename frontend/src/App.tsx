import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocumentsPage from './pages/DocumentsPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/documents-page" element={<DocumentsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
