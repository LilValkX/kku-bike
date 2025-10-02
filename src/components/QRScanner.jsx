import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import styled, { keyframes } from 'styled-components';
import { theme } from '../utils/theme';
import { Camera, Timer } from 'lucide-react';

// 🔲 แอนิเมชันเส้นสแกน
const scanLine = keyframes`
  0% { top: 10%; }
  100% { top: 90%; }
`;

// กล่องหลัก
const ScannerContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 420px;
  margin: 2rem auto;
  background: ${theme.white};
  padding: 1.25rem;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 1rem;
  }
`;

// กล้อง
const WebcamWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1rem;

  video {
    width: 100%;
    height: auto;
    border-radius: 16px;
  }
`;

// Overlay พร้อมแอนิเมชันเส้น
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  .scan-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background: ${theme.accent};
    animation: ${scanLine} 2s linear infinite alternate;
  }

  p {
    position: absolute;
    bottom: 12px;
    background: rgba(0,0,0,0.55);
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 0.9rem;
    color: ${theme.white};
    font-weight: 500;
  }
`;

// ปุ่ม
const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background: linear-gradient(135deg, ${theme.accent}, ${theme.secondary});
  color: ${theme.white};
  padding: 0.65rem 1.5rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'Prompt', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.15);
  }
`;

// เวลา
const TimeDisplay = styled.div`
  margin-top: 1rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

const QRScanner = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    let id;
    if (timeLeft > 0) {
      id = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(id);
  }, [timeLeft]);

  const startRental = () => setTimeLeft(1800); // 30 นาที
  const endRental = () => {
    setTimeLeft(null);
    alert('สิ้นสุดการเช่า');
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = (sec % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <ScannerContainer>
      <WebcamWrapper>
        <Webcam audio={false} width={320} height={240} />
        <Overlay>
          <div className="scan-line" />
          <p><Camera size={18} style={{ marginRight: 6 }} /> สแกน QR เพื่อเช่า</p>
        </Overlay>
      </WebcamWrapper>

      {timeLeft ? (
        <>
          <TimeDisplay>
            <Timer size={18} /> เวลาเหลือ: {formatTime(timeLeft)} นาที
          </TimeDisplay>
          <ButtonRow>
            <Button onClick={endRental}>จบเช่า</Button>
            <Button onClick={onClose}>ปิด</Button>
          </ButtonRow>
        </>
      ) : (
        <ButtonRow>
          <Button onClick={startRental}>เริ่มเช่า (Simulate)</Button>
          <Button onClick={onClose}>ปิด</Button>
        </ButtonRow>
      )}
    </ScannerContainer>
  );
};

export default QRScanner;
