import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts';
import Card from '../components/Card';
import { dummyProfile } from '../utils/dummyData';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { MapPin, Flame, Leaf, Award, CreditCard } from 'lucide-react';

const Container = styled.div`
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 6rem 1rem 1rem;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HistorySection = styled.div`
  background: ${theme.white};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    font-size: 1.4rem;
    color: ${theme.primary};
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
      font-size: 1rem;
      color: ${theme.text || '#555'};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Profile = () => {
  // ✅ กราฟรวมค่าต่าง ๆ
  const chartData = [
    { name: 'ระยะทาง (km)', value: dummyProfile.distance },
    { name: 'แคลอรี่ (kcal)', value: dummyProfile.calories },
    { name: 'คาร์บอน (kg)', value: dummyProfile.carbon },
  ];

  // ✅ กราฟประวัติการปั่นจักรยาน (Line chart)
  const historyData = dummyProfile.history.map(item => ({
    date: item.date,
    distance: item.distance,
  }));

  return (
    <Container>
      {/* Card Grid */}
      <CardsWrapper>
        <Card title="ระยะทางสะสม" value={`${dummyProfile.distance} km`} icon={<MapPin />} />
        <Card title="แคลอรี่เผาผลาญ" value={`${dummyProfile.calories} kcal`} icon={<Flame />} />
        <Card title="ลดคาร์บอน" value={`${dummyProfile.carbon} kg`} icon={<Leaf />} />
        <Card title="คะแนนสะสม" value={dummyProfile.points} icon={<Award />} />
        <Card title="ยอดเงินคงเหลือ" value={`${dummyProfile.balance} บาท`} icon={<CreditCard />} />
      </CardsWrapper>

      {/* History Section */}
      <HistorySection>
        <div>
          <h3>ประวัติการเดินทาง</h3>
          <ul>
            {dummyProfile.history.map((item) => (
              <li key={item.id}>
                {item.date} - {item.distance} km ({item.time})
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>ประวัติการเติมเงิน</h3>
          <ul>
            {dummyProfile.payments.map((item) => (
              <li key={item.id}>
                {item.date} - {item.amount} บาท
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>สถิติรวม</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill={theme.accent} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3>ระยะทางแต่ละวัน</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={historyData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="distance" stroke={theme.primary} strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </HistorySection>
    </Container>
  );
};

export default Profile;
