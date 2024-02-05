import { useState } from 'react';
import { NanyItem } from '../NanyItem/NanyItem';
import {
  List,
  Button,
  Label,
  Selects,
  Form,
} from '../NannysList/NannysList.styled';
import { selectNaniesList } from '../../redux/NaniesSlice';
import { useSelector } from 'react-redux';
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
  console.log(page);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(fetcherAllCars(page));
  // }, [dispatch, page]);

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
