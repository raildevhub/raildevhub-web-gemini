import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RayNextStoryPage from './pages/RayNextStoryPage';
import RayDataStoryPage from './pages/RayDataStoryPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-neutral-extralight dark:bg-neutral-dark text-neutral-dark dark:text-neutral-extralight min-h-screen font-sans antialiased">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/story/raynext" element={<RayNextStoryPage />} />
              <Route path="/story/raydata" element={<RayDataStoryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
