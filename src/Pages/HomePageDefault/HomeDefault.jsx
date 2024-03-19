import { useEffect } from 'react';
import { Home } from '../../components/Home/Home';
import { HomeMini } from '../../components/HomeMini/HomeMini';
import { Container } from '../HomePageDefault/HomePage.styled';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { setUser } from '../../redux/UserSlice';
import { useDispatch } from 'react-redux';

export const HomeDefaultPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user.accessToken === localStorage.getItem('token')) {
        console.log(user.accessToken);
        const newUser = {
          id: user.uid,
          token: user.accessToken,
          email: user.email,
          name: user.displayName,
        };
        dispatch(setUser(newUser));
      }
    });
  }, [dispatch]);

  return (
    <Container>
      <Home />
      <HomeMini />
    </Container>
  );
};
