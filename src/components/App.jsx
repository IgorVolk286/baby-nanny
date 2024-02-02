import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { HomeDefaultPage } from 'Pages/HomePageDefault/HomeDefault';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomeDefaultPage />}></Route>
          {/* <Route path="/catalog" element={<CatalogPage />}></Route>
         <Route path="/favorites" element={<FavoritesPage />}></Route>
         <Route path="*" element={<HomePage />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
