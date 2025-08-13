import { useEffect, useState } from 'react';
import { fetchDashboard, fetchHackathons } from '../services/api';

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Access Denied. Please log in.');
      return;
    }

    fetchDashboard(token)
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage('Invalid or expired token'));

    fetchHackathons().then((res) => setHackathons(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <ul>
        {hackathons.map((hack, index) => (
          <li key={index}>{hack.name}</li>
        ))}
      </ul>
    </div>
  );
}
