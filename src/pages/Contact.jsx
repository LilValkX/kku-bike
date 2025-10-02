import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { Mail, Phone } from 'lucide-react';

const Container = styled.div`
  padding: 4rem 1rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .contact-card {
    background: ${theme.white};
    padding: 1.5rem 2rem;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 250px;
    max-width: 400px;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: default;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    svg {
      color: ${theme.primary};
      min-width: 24px;
      min-height: 24px;
    }

    p {
      margin: 0;
      font-size: 1rem;
      text-align: left;
      color: ${theme.text || '#555'};
      word-break: break-all;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }
    .contact-card {
      flex-direction: column;
      gap: 0.5rem;
      min-width: 200px;
      max-width: 90%;
      p {
        text-align: center;
      }
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <h2>ติดต่อเรา</h2>
      <div className="contact-card">
        <Mail size={24} />
        <p>support@bikerental.kku</p>
      </div>
      <div className="contact-card">
        <Phone size={24} />
        <p>012-345-6789</p>
      </div>
    </Container>
  );
};

export default Contact;
