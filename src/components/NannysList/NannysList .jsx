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
  // selectNaniesList,
  selectfilteredNanies,
  setLoadind,
} from '../../redux/NaniesSlice';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../firebase';
import { getDatabase, ref, child, get } from 'firebase/database';
import { actualPosition } from '../../redux/FilterSlice';

const options = [
  'Z to A',
  'Less than 10$',
  'Greater than 10$',
  'Popular',
  'Not popular',
];

export const NannysList = () => {
  const [select, setSelect] = useState('A to Z');
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

  const handler = e => {
    e.preventDefault();
    setSelect(e.target.value);
    dispatch(actualPosition(e.target.value));
    setLimit(3);
  };

  // const nanyList = useSelector(selectNaniesList);
  // const paglist = nanyList.slice(0, limit);

  const filteredNanies = useSelector(selectfilteredNanies);
  console.log(filteredNanies);
  const paglist = filteredNanies.slice(0, limit);
  return (
    <>
      <Form>
        <Label>
          <Selects
            name="select"
            id="position"
            value={select}
            onChange={handler}
          >
            <option selected> A to Z </option>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Selects>
        </Label>
        {/* <button type="submit">Find</button> */}
      </Form>
      <List>
        {paglist.map(nanny => (
          <NanyItem nany={nanny} key={nanny.id} />
        ))}
      </List>
      {paglist.length !== filteredNanies.length && (
        <Button type="button" onClick={() => setLimit(limit + 3)}>
          Load more
        </Button>
      )}
    </>
  );
};
