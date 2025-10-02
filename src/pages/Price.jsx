import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';

const Container = styled.div`
  padding: 4rem 0 2rem;
  flex-grow: 1;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-family: 'Prompt', sans-serif;
    margin-bottom: 2rem;
    color: #000000; /* เปลี่ยนเป็นสีดำ */
  }

  @media (max-width: 768px) {
    padding: 2rem 0 1rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const PriceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PriceCard = styled(motion.div)`
  background: ${theme.white};
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(to bottom, ${theme.primary}, ${theme.midTone}, ${theme.secondary});
    z-index: -1;
    border-radius: 15px;
    padding: 2px;
    background-clip: padding-box;
  }

  h3 {
    font-size: 1.8rem;
    color: ${theme.white}; /* เปลี่ยนเป็นสีขาว */
    margin-bottom: 0.5rem;
    font-family: 'Prompt', sans-serif;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1.2rem;
    color: ${theme.white}; /* เปลี่ยนเป็นสีขาว */
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${theme.accent};
  color: ${theme.white};
  padding: 0.25rem 0.75rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: 'Prompt', sans-serif;
  z-index: 1;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Price = () => {
  return (
    <Container>
      <div className="container">
        <h2>ราคาเช่า</h2>
        <PriceGrid
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <PriceCard variants={cardVariants}>
            <h3>10 บาท</h3>
            <p>ต่อ 30 นาที</p>
          </PriceCard>
          <PriceCard variants={cardVariants}>
            <Badge>Best Value</Badge>
            <h3>20 บาท</h3>
            <p>ต่อ 60 นาที</p>
          </PriceCard>
        </PriceGrid>
      </div>
    </Container>
  );
};

export default Price;