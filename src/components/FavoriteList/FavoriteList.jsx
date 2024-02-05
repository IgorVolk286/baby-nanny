// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
  List,
  Label,
  Selects,
  Form,
} from '../FavoriteList/FavoriteList.styled';

import { FavoriteItem } from '../../components/FavoriteItem/FavoriteItem';
import { selectFavorites } from '../../redux/FavoriteSlice';
import { useSelector } from 'react-redux';

const options = [
  'Z to A',
  'Less than 10$',
  'Greater than 10$',
  'Popular',
  'Not popular',
  'Show all',
];

export const FavoriteList = () => {
  const holder = useSelector(selectFavorites);

  return (
    <>
      <Form>
        <Label>
          <Selects name="" id="">
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
        {holder.map(nanny => (
          <FavoriteItem nany={nanny} key={nanny.id} />
        ))}
      </List>
    </>
  );
};
