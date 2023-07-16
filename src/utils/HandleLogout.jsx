import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { REMOVE_ACTIVE_USER } from '../redux/slices/userSlice';

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Remove items from localStorage
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    // Dispatch action to remove active user
    dispatch(REMOVE_ACTIVE_USER());

    // Navigate to the desired page
    navigate('/');
  };

  return handleLogout;
};

export default useLogout;