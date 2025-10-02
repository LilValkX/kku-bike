import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { Bike } from 'lucide-react';

const Hero = styled.div`
  background: linear-gradient(135deg, ${theme.primary}, ${theme.midTone}, ${theme.secondary});
  color: ${theme.white};
  padding: 4rem 2rem 3rem;
  text-align: center;
  border-radius: 16px;
  margin: 4rem 1rem 2rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    width: 60px;
    height: 60px;
    color: ${theme.white}; /* เปลี่ยนสีตามต้องการ */
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0;
    line-height: 1.3;
  }

  p {
    font-size: 1.2rem;
    margin: 0.25rem 0;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;

    svg {
      width: 50px;
      height: 50px;
    }

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const HeroSection = () => {
  return (
    <Hero>
      <Bike />
      <h1>เช่าจักรยานง่ายๆ ที่สวนวิ่งเกษตร มข.</h1>
      <p>ปั่นสนุก สุขภาพดี ลดคาร์บอน</p>
    </Hero>
  );
};

export default HeroSection;
