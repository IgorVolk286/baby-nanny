import { useState, useEffect } from 'react';
import { NanyItem } from '../NanyItem/NanyItem';
import {
  List,
  Button,
  Label,
  Selects,
  Form,
} from '../NannysList/NannysList.styled';
import { getAllNanie, selectNaniesList } from '../../redux/NaniesSlice';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

const options = [
  'Z to A',
  'Less than 10$',
  'Greater than 10$',
  'Popular',
  'Not popular',
  'Show all',
];

export const NannysList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/`))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          dispatch(getAllNanie(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [dispatch]);

  const nanyList = useSelector(selectNaniesList);

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
        {nanyList.map(nanny => (
          <NanyItem nany={nanny} key={nanny.id} />
        ))}
      </List>
      <Button type="button" onClick={() => setPage(page + 1)}>
        Load more
      </Button>
    </>
  );
};
