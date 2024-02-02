import { Home } from '../../components/Home/Home';
import { HomeMini } from '../../components/HomeMini/HomeMini';
import { Div } from '../HomePageDefault/HomePage.styled';
export const HomeDefaultPage = () => {
  return (
    <Div>
      <Home />
      <HomeMini />
    </Div>
  );
};
