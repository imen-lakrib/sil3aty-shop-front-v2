import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AuthAdmin = ({ children }) => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? jwt_decode(token) : null;
  const role = decodedToken ? decodedToken.id.role : null;

  if (token && role === 'Admin') {
    return children;
  } else return null
  // {
  //   return <Navigate to="/hello" replace={true} />;
  // }
};

const AuthClient = ({ children }) => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? jwt_decode(token) : null;
  const role = decodedToken ? decodedToken.id.role : null;

  if (token && role === 'Client') {
    return children;
  } else return null
  //  else {
  //   return <Navigate to="/hello" replace={true} />;
  // }
};

export { AuthAdmin, AuthClient };
