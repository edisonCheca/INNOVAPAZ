import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import DocumentsPage from './pages/DocumentsPage';
import { UserProvider } from './context/UserContext.tsx';
import ScrollToTop from './components/common/ScrollToTop';

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideSystemHeader = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      <ScrollToTop />

      {/* Header del sistema */}
      {!hideSystemHeader && <Header />}

      <div className='app'>
        <Routes>
          <Route path='/innovapaz' element={<HomePage />} />
          <Route path='/innovapaz/login' element={<LoginPage />} />
          <Route path='/innovapaz/register' element={<RegisterPage />} />
          <Route path='/innovapaz/about' element={<AboutPage />} />
          <Route path='/innovapaz/contacto' element={<ContactPage />} />
          <Route path='/innovapaz/documentacion' element={<DocumentsPage />} />

          <Route path='/terms' element={<TermsPage />} />
          <Route path='/privacy' element={<PrivacyPage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

const App: React.FC = () => (
  <UserProvider>
    <Router>
      <AppContent />
    </Router>
  </UserProvider>
);

export default App;
