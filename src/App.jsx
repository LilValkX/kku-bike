import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Price from './pages/Price';
import TopUp from './pages/TopUp';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* เต็มความสูง viewport */
  flex-grow: 1;
`;

const MainContent = styled.main`
  flex-grow: 1; /* ทำให้ content ขยายเต็มพื้นที่ระหว่าง Navbar และ Footer */
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <AppContainer>
        <Navbar isLoggedIn={isLoggedIn} />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/price" element={<Price />} />
            <Route path="/topup" element={<TopUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;