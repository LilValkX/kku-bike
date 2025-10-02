import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const CardWrapper = styled.div`
  background: ${theme.white};
  border-radius: 16px;
  padding: 1.5rem 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
  flex: 1;
  min-width: 150px;
  max-width: 300px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }

  svg {
    width: 32px;
    height: 32px;
    color: ${theme.primary};
  }

  h3 {
    font-size: 1.3rem;
    margin: 0.5rem 0;
    color: ${theme.primary};
    font-weight: 600;
  }

  p {
    font-size: 1.05rem;
    color: ${theme.text || '#555'};
    margin: 0;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    margin: 0.5rem 0;
  }
`;

const Card = ({ title, value, icon }) => {
  return (
    <CardWrapper>
      {icon}
      <h3>{title}</h3>
      <p>{value}</p>
    </CardWrapper>
  );
};

export default Card;
