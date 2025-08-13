function Dashboard() {
  const token = localStorage.getItem('token');

  return (
    <div>
      <h2>Dashboard</h2>
      {token ? <p>Welcome back! Token: {token}</p> : <p>Please log in.</p>}
    </div>
  );
}

export default Dashboard;
