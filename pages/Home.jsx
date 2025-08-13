import { useEffect, useState } from 'react';
import { fetchHackathons } from '../services/api';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchHackathons().then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <h1>Upcoming Hackathons</h1>
      <ul>
        {events.map((e) => (
          <li key={e._id}>
            <strong>{e.title}</strong> — {new Date(e.date).toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
