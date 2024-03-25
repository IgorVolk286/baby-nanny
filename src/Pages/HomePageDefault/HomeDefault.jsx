import { Home } from '../../components/Home/Home';
import { HomeMini } from '../../components/HomeMini/HomeMini';
import { Container } from '../HomePageDefault/HomePage.styled';

export const HomeDefaultPage = () => {
  return (
    <Container>
      <Home />
      <HomeMini />
    </Container>
  );
};
