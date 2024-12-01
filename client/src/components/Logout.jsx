import { useNavigate } from 'react-router-dom';
import api from '../api';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/logout');
      navigate('/login');
    } catch (err) {
      console.error('Error logging out', err);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
