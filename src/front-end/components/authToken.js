import { useNavigate } from 'react-router-dom';

function AuthWrapper({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (!token) {
    navigate('/login');
    return null;
  }

  return children;
}

export default AuthWrapper;