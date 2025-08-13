import { useEffect, useState } from 'react';
import { fetchHackathons } from '../services/api';

export default function Home() {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    fetchHackathons()
      .then((res) => setHackathons(res.data))
      .catch((err) => console.error('Error fetching hackathons:', err));
  }, []);

  return (
    <div>
      <h1>Hackathon Listings</h1>
      <ul>
        {hackathons.map((hack, index) => (
          <li key={index}>{hack.name}</li>
        ))}
      </ul>
    </div>
  );
}
