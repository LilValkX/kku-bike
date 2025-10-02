import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Foot = styled.footer`
  background: linear-gradient(to bottom, ${theme.primary}, ${theme.midTone}, ${theme.secondary});
  color: ${theme.white};
  padding: 2rem 1rem;
  width: 100%;
  margin-top: auto;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    font-family: 'Prompt', sans-serif;
  }

  h4 {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }

  a {
    color: ${theme.white};
    text-decoration: none;
    margin: 0.25rem 0;
    display: block;
    transition: color 0.2s;
    &:hover {
      color: ${theme.accent};
    }
  }

  .socials {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    svg {
      cursor: pointer;
      transition: transform 0.2s, color 0.2s;
      &:hover {
        transform: scale(1.2);
        color: ${theme.accent};
      }
    }
  }

  .bottom {
    text-align: center;
    width: 100%;
    margin-top: 2rem;
    font-size: 0.85rem;
    border-top: 1px solid rgba(255,255,255,0.2);
    padding-top: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    .container {
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
    }
    .socials {
      justify-content: center;
    }
  }
`;

const Footer = () => {
  return (
    <Foot>
      <div className="container">
        <div className="about">
          <h4>Bike Rental KKU</h4>
          <p>เช่าจักรยานสะดวก รวดเร็ว ปลอดภัย สำหรับนักศึกษาและชุมชนรอบมหาวิทยาลัย</p>
        </div>

        <div className="links">
          <h4>ลิงก์ที่เกี่ยวข้อง</h4>
          <a href="/price">ราคา</a>
          <a href="/topup">เติมเงิน</a>
          <a href="/contact">ติดต่อเรา</a>
          <a href="/faq">คำถามที่พบบ่อย</a>
        </div>

        <div className="contact">
          <h4>ติดต่อ</h4>
          <p>Email: support@bikekku.com</p>
          <p>Tel: 080-123-4567</p>
          <div className="socials">
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
            <Mail size={20} />
          </div>
        </div>
      </div>

      <div className="bottom">
        © 2025 Bike Rental KKU. All rights reserved.
      </div>
    </Foot>
  );
};

export default Footer;
