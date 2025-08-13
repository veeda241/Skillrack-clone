import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🚀 SkillRack Hackatron</h1>
      <p>
        Welcome to the ultimate hub for developers to discover hackathons, build teams, and track progress.
        Whether you're a beginner or a seasoned coder, SkillRack Hackatron helps you level up through real-world challenges.
      </p>

      <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '2rem auto' }}>
        <li>🗓️ Browse upcoming hackathons</li>
        <li>👥 Form or join teams</li>
        <li>📈 Track your submissions and progress</li>
        <li>🏆 Earn badges and climb the leaderboard</li>
      </ul>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/register">
          <button style={{ marginRight: '1rem' }}>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
