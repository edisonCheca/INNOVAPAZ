import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocumentsPage from './pages/DocumentsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/documents-page" element={<DocumentsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
