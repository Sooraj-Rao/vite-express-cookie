import { useEffect, useState } from 'react';
import api from '../api';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/user');
        setUser(response.data);
      } catch (err) {
        setMessage(err.response.data.message || 'Error fetching user data');
      }
    };
    fetchUser();
  }, []);

  if (message) return <p>{message}</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
