import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { motion } from 'framer-motion';

Modal.setAppElement('#root');

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${theme.white};
  border-radius: 12px;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 90%;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${theme.gray};
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  background: ${theme.accent};
  color: ${theme.white};
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Prompt', sans-serif;
`;

const ModalPopup = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ username, loggedIn: true }));
    localStorage.setItem('balance', '50'); // เริ่มต้น 50 บาท
    onLogin();
    if (isRegister) {
      alert('สมัครสำเร็จ! รับฟรี 30 นาที');
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { background: 'rgba(0,0,0,0.5)' },
        content: { padding: 0, border: 'none', background: 'transparent' }
      }}
    >
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Form onSubmit={handleSubmit}>
          <h2>{isRegister ? 'Register' : 'Login'}</h2>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">{isRegister ? 'Register' : 'Login'}</Button>
          <p onClick={() => setIsRegister(!isRegister)} style={{ cursor: 'pointer', textAlign: 'center' }}>
            {isRegister ? 'Already have account? Login' : 'New user? Register'}
          </p>
        </Form>
      </motion.div>
    </Modal>
  );
};

export default ModalPopup;