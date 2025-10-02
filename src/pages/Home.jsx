import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ModalPopup from '../components/ModalPopup';
import Modal from 'react-modal';
import QRScanner from '../components/QRScanner';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { Bike } from 'lucide-react';

// Container หลัก
const Container = styled.div`
  padding: 3rem 1.5rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.background || '#f7f7f7'};
`;

// ปุ่มเช่าจักรยาน
const RentButton = styled.button`
  background: linear-gradient(135deg, ${theme.accent}, ${theme.secondary});
  color: ${theme.white};
  padding: 0.85rem 2rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'Prompt', sans-serif;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 2rem auto;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`;

// Section ของราคา
const PriceSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

// การ์ดราคา
const PriceCard = styled.div`
  background: ${theme.white};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 28px rgba(0,0,0,0.1);
  min-width: 220px;
  max-width: 280px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 14px 40px rgba(0,0,0,0.15);
  }

  h3 {
    font-size: 1.8rem;
    color: ${theme.primary};
    margin-bottom: 0.75rem;
    font-weight: 700;
    transition: color 0.3s;
  }

  p {
    font-size: 1.2rem;
    color: ${theme.text || '#555'};
    transition: color 0.3s;
  }

  &:hover h3,
  &:hover p {
    color: ${theme.accent};
  }

  @media (max-width: 768px) {
    min-width: 180px;
    max-width: 220px;
    padding: 1.5rem 1rem;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      setIsModalOpen(true);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Container>
      <HeroSection />

      <RentButton onClick={() => setIsScannerOpen(true)}>
        <Bike size={20} /> เช่าจักรยาน
      </RentButton>

      <PriceSection>
        <PriceCard>
          <h3>10 บาท</h3>
          <p>ต่อ 30 นาที</p>
        </PriceCard>
        <PriceCard>
          <h3>20 บาท</h3>
          <p>ต่อ 60 นาที</p>
        </PriceCard>
      </PriceSection>

      <ModalPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={() => setIsLoggedIn(true)}
      />

      <Modal
        isOpen={isScannerOpen}
        onRequestClose={() => setIsScannerOpen(false)}
        style={{
          overlay: { background: 'rgba(0,0,0,0.65)' },
          content: {
            padding: 0,
            border: 'none',
            background: 'transparent',
            inset: '50% auto auto 50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <QRScanner onClose={() => setIsScannerOpen(false)} />
      </Modal>
    </Container>
  );
};

export default Home;
