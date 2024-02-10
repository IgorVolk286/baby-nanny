import { useState, useEffect } from 'react';
import { NanyItem } from '../NanyItem/NanyItem';
import {
  List,
  Button,
  Label,
  Selects,
  Form,
} from '../NannysList/NannysList.styled';
import {
  getAllNanie,
  selectNaniesList,
  setLoadind,
} from '../../redux/NaniesSlice';
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
  const [limit, setLimit] = useState(3);
  const dispatch = useDispatch();
  console.log(db);
  useEffect(() => {
    dispatch(setLoadind());
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/`))
      .then(snapshot => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
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
  const paglist = nanyList.slice(0, limit);
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
        {paglist.map(nanny => (
          <NanyItem nany={nanny} key={nanny.id} />
        ))}
      </List>
      {paglist.length !== nanyList.length && (
        <Button type="button" onClick={() => setLimit(limit + 3)}>
          Load more
        </Button>
      )}
    </>
  );
};
