import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';

// Importar páginas (lazy loading para mejor performance)
const Home = React.lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const WhyChooseUs = React.lazy(() =>
  import('./pages/WhyChooseUs').then((module) => ({ default: module.WhyChooseUs }))
);
const Services = React.lazy(() =>
  import('./pages/Services').then((module) => ({ default: module.Services }))
);
const Contact = React.lazy(() =>
  import('./pages/Contact').then((module) => ({ default: module.Contact }))
);
const PrivacyPolicy = React.lazy(() =>
  import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy }))
);
const TermsOfService = React.lazy(() =>
  import('./pages/TermsOfService').then((module) => ({ default: module.TermsOfService }))
);

// Loading component
const PageLoader: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
      fontSize: 'var(--font-size-lg)',
      color: 'var(--color-primary)',
    }}
  >
    Cargando...
  </div>
);

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <Layout>
            <React.Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/why-choose-us' element={<WhyChooseUs />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/terms-of-service' element={<TermsOfService />} />

                {/* 404 - Not Found */}
                <Route
                  path='*'
                  element={
                    <div
                      style={{
                        textAlign: 'center',
                        padding: 'var(--spacing-6xl) var(--spacing-md)',
                        minHeight: '400px',
                      }}
                    >
                      <h1
                        style={{
                          fontSize: 'var(--font-size-4xl)',
                          marginBottom: 'var(--spacing-lg)',
                          color: 'var(--color-secondary)',
                        }}
                      >
                        404 - Página no encontrada
                      </h1>
                      <p
                        style={{
                          fontSize: 'var(--font-size-lg)',
                          color: 'var(--color-neutral-medium)',
                          marginBottom: 'var(--spacing-xl)',
                        }}
                      >
                        La página que buscas no existe o ha sido movida.
                      </p>
                      <a
                        href='/'
                        style={{
                          display: 'inline-block',
                          padding: 'var(--spacing-md) var(--spacing-xl)',
                          background: 'var(--gradient-primary)',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: 'var(--border-radius-lg)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                      >
                        Volver al inicio
                      </a>
                    </div>
                  }
                />
              </Routes>
            </React.Suspense>
          </Layout>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
};

export default App;
