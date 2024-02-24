import { useState } from 'react';
import {
  List,
  Label,
  Selects,
  Form,
} from '../FavoriteList/FavoriteList.styled';
import { FavoriteItem } from '../../components/FavoriteItem/FavoriteItem';
import { selectfilteredFvorites } from '../../redux/FavoriteSlice';
import { useSelector, useDispatch } from 'react-redux';
import { actualPositionFavorite } from '../../redux/FilterSlice';
const options = [
  'Z to A',
  'Less than 10$',
  'Greater than 10$',
  'Popular',
  'Not popular',
  'Show all',
];

export const FavoriteList = () => {
  const [select, setSelect] = useState('A to Z');
  const filtered = useSelector(selectfilteredFvorites);

  const dispatch = useDispatch();
  const handler = e => {
    e.preventDefault();
    setSelect(e.target.value);
    dispatch(actualPositionFavorite(e.target.value));
  };

  return (
    <>
      <Form>
        <Label>
          <Selects name="" id="" onChange={handler} value={select}>
            <option selected> A to Z </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Selects>
        </Label>
      </Form>
      <List>
        {filtered.map(nanny => (
          <FavoriteItem nany={nanny} key={nanny.id} />
        ))}
      </List>
    </>
  );
};
