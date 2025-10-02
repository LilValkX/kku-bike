import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../utils/theme";
import { CreditCard, Wallet, Smartphone } from "lucide-react";

const Container = styled.div`
  padding: 4rem 1rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 0 1rem;
    h2 {
      font-size: 1.6rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${theme.gray};
  border-radius: 12px;
  font-size: 1rem;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  }
`;

const QuickSelect = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const QuickButton = styled.button`
  background: ${theme.white};
  border: 1px solid ${theme.gray};
  border-radius: 12px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:hover {
    background: ${theme.primary};
    color: ${theme.white};
    border-color: ${theme.primary};
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1rem;
  border: 1px solid ${theme.gray};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props) => (props.active ? theme.primary : theme.white)};
  color: ${(props) => (props.active ? theme.white : theme.text || "#333")};

  &:hover {
    border-color: ${theme.primary};
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, ${theme.accent}, ${theme.secondary});
  color: ${theme.white};
  padding: 0.85rem 1rem;
  border: none;
  border-radius: 999px;
  font-family: "Prompt", sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Message = styled.p`
  color: ${theme.primary};
  font-weight: 500;
  margin-top: 1rem;
`;

const TopUp = () => {
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseInt(amount);
    if (!payment) {
      setMessage("กรุณาเลือกวิธีการชำระเงิน");
      return;
    }
    if (isNaN(amt) || amt <= 0) {
      setMessage("กรุณากรอกจำนวนเงินที่ถูกต้อง");
      return;
    }
    const currentBalance = parseInt(localStorage.getItem("balance") || "0");
    localStorage.setItem("balance", currentBalance + amt);
    setMessage(
      `✅ เติมเงิน ${amt} บาท ผ่าน ${payment} สำเร็จ! ยอดคงเหลือ: ${
        currentBalance + amt
      } บาท`
    );
    setAmount("");
  };

  return (
    <Container>
      <h2>เติมเงิน</h2>
      <Form onSubmit={handleSubmit}>
        {/* Input จำนวนเงิน */}
        <Input
          type="number"
          placeholder="จำนวนเงิน (บาท)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* ปุ่ม quick select */}
        <QuickSelect>
          {[10, 20, 50, 100, 200].map((val) => (
            <QuickButton key={val} onClick={() => setAmount(val.toString())}>
              {val} บาท
            </QuickButton>
          ))}
        </QuickSelect>

        {/* เลือกวิธีการจ่าย */}
        <PaymentMethods>
          <PaymentOption
            active={payment === "PromptPay"}
            onClick={() => setPayment("PromptPay")}
          >
            <Smartphone size={20} />
            PromptPay
          </PaymentOption>
          <PaymentOption
            active={payment === "TrueMoney Wallet"}
            onClick={() => setPayment("TrueMoney Wallet")}
          >
            <Wallet size={20} />
            TrueMoney Wallet
          </PaymentOption>
          <PaymentOption
            active={payment === "บัตรเครดิต"}
            onClick={() => setPayment("บัตรเครดิต")}
          >
            <CreditCard size={20} />
            บัตรเครดิต / เดบิต
          </PaymentOption>
        </PaymentMethods>

        <Button type="submit">ยืนยันการเติมเงิน</Button>
      </Form>

      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default TopUp;
