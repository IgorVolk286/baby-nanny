import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { HomeDefaultPage } from 'Pages/HomePageDefault/HomeDefault';
import { NannysPage } from 'Pages/NannysPage/NannysPage';
import { FavoritesPage } from 'Pages/FavoritesPage/FavoritesPage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { setUser } from '../redux/UserSlice';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from '../PrivateRoute';

// const HomePage = lazy(() => import('Pages/HomePageDefault/HomeDefault'));
// const NannysPage = lazy(() => import('Pages/NannysPage/NannysPage'));
// const FavoritesPage = lazy(() => import('Pages/FavoritesPage/FavoritesPage'));

export const App = () => {
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
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomeDefaultPage />}></Route>
          <Route path="/nannies" element={<NannysPage />}></Route>
          <Route
            path="/favorites"
            element={
              <PrivateRoute
                redirectTo="/nannies"
                component={<FavoritesPage />}
              />
            }
          ></Route>
          {/* <Route path="*" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
