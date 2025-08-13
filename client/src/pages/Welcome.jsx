import { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🚀 SkillRack Hackatron</h1>
      <form onSubmit={handleLogin}>
        <input name="username" onChange={handleChange} placeholder="Username" required />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>New here? <a href="/register">Register</a></p>
    </div>
  );
}
