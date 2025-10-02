import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const Container = styled.div`
  padding: 4rem 0 2rem;

  h2 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 0 1rem;
    h2 {
      font-size: 1.4rem;
    }
  }
`;

const Question = styled.div`
  margin-bottom: 1rem;
  background: ${theme.white};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  h3 {
    font-size: 1.2rem;
    color: ${theme.primary};
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

const FAQ = () => {
  return (
    <Container>
      <div className="container">
        <h2>คำถามที่พบบ่อย</h2>
        <Question>
          <h3>เช่าอย่างไร?</h3>
          <p>สแกน QR แล้วเริ่มปั่น</p>
        </Question>
        <Question>
          <h3>ราคาเท่าไหร่?</h3>
          <p>10 บาท/30 นาที, 20 บาท/60 นาที</p>
        </Question>
      </div>
    </Container>
  );
};

export default FAQ;