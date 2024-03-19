import { Navigate } from 'react-router-dom';
import { selectIsLogin } from '../src/redux/UserSlice';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLogin);
  const shouldRedirect = !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
