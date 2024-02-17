import { FavoriteList } from '../../components/FavoriteList/FavoriteList';
// import { Default } from 'components/FavoriteList/FavoriteDefault/FavoriteDefault';
import { Container } from '../FavoritesPage/FavoritePage.styled';
// import { useSelector } from 'react-redux';
// import { selectFavorite } from '../../redux/FavoriteSlice.js';
export const FavoritesPage = () => {
  // const favorit = useSelector(selectFavorite);

  return (
    <>
      {/* <Container>{favorit.length ? <FavoriteList /> : <Default />}</Container> */}
      <Container>
        <FavoriteList />
      </Container>
    </>
  );
};
