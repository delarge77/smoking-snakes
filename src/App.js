import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tour from './pages/Tour';
import About from './pages/About';
import Contact from './pages/Contact';
import Merchandise from './pages/Merchandise';
import Videos from './pages/Videos';

// Hooks
import useScrollToTop from './hooks/useScrollToTop';

const AppContainer = styled.div`
  min-height: 100vh;
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
  
  @media (max-width: 480px) {
    background-size: cover;
    background-position: center center;
  }
`;

const MainContent = styled(motion.main)`
  min-height: calc(100vh - 140px);
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    min-height: calc(50vh - 60px);
  }
  
  @media (max-width: 480px) {
    min-height: calc(40vh - 50px);
  }
`;

// Component that handles scrolling to top (must be inside Router context)
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContainer>
          <Header />
          <MainContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/tour" element={<Tour />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </HelmetProvider>
  );
}

export default App;
