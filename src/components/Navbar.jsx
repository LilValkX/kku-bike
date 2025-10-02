import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { User, LogIn } from 'lucide-react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, ${theme.primary}, ${theme.midTone}, ${theme.secondary});
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: 'Prompt', sans-serif;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.white};
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.2s;

  &:hover {
    color: ${theme.accent};
  }

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 0%;
    background: ${theme.accent};
    transition: width 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const IconLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = ({ isLoggedIn }) => {
  return (
    <Nav>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/price">ราคา</NavLink>
        <NavLink to="/topup">เติมเงิน</NavLink>
        <NavLink to="/contact">ติดต่อ</NavLink>
        <NavLink to="/faq">คำถามที่พบบ่อย</NavLink>
        {isLoggedIn ? (
          <IconLink to="/profile"><User size={20} /></IconLink>
        ) : (
          <IconLink to="/login"><LogIn size={20} /></IconLink>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
