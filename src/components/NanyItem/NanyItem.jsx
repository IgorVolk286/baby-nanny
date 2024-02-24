import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Ul,
  Img,
  Li,
  Span,
  Title,
  UlAbout,
  P,
  LiItem,
  ButtonRead,
  Wrap,
  WrapAbout,
  ButtonFavorite,
  SpanN,
  Locat,
  Map,
  Star,
  SpanPrice,
  Pin,
  Button,
  ReadLogo,
  ReadSpan,
  ReadWrap,
  H3,
  ReadWrapS,
  Text,
  LiText,
  Hard,
  HardActive,
} from '../NanyItem/NanyItem.styled';
import { Modalca } from '../Modal/Modal';
import { Appointment } from 'components/Appointment/Appointment';
import {
  delNany,
  selectFavorites,
  createFavoriveNany,
} from '../../redux/FavoriteSlice';
import { selectNaniesList } from '../../redux/NaniesSlice';
import { selectIsLogin } from '../../redux/UserSlice';
import toast from 'react-hot-toast';
export const NanyItem = ({ nany }) => {
  const now = new Date().getFullYear();

  const dispatch = useDispatch();
  const holder = useSelector(selectFavorites);
  const isLogin = useSelector(selectIsLogin);
  const nanyList = useSelector(selectNaniesList);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = e => {
    setIsOpen(!isOpen);
  };

  const createFavorite = e => {
    const idCurrent = e.currentTarget.id;
    const index = holder.findIndex(item => item.id === idCurrent);
    const newNany = nanyList.find(item => item.id === idCurrent);

    if (!isLogin) {
      toast.error('You must to login');
      return;
    } else if (index !== -1) {
      dispatch(delNany(idCurrent));
    } else {
      dispatch(createFavoriveNany(newNany));
    }
  };

  return (
    <LiItem id={nany.id}>
      <Ul>
        <Locat>
          <Map /> {nany.location}
          <Pin />
        </Locat>

        <Locat>
          <Star />
          {nany.rating}
          <Pin />
        </Locat>
        <Locat>
          Price / 1 Hour: <SpanPrice>{nany.price_per_hour}$</SpanPrice>
        </Locat>

        <li>
          <ButtonFavorite type="button" id={nany.id} onClick={createFavorite}>
            {holder.some(item => item.id === nany.id) && isLogin ? (
              <HardActive />
            ) : (
              <Hard />
            )}
          </ButtonFavorite>
        </li>
      </Ul>

      <Wrap>
        <Img src={nany.avatar_url} alt="nany " />
        <WrapAbout>
          <SpanN> Nanny </SpanN>
          <Title>{nany.name}</Title>
          <UlAbout>
            <Li>
              Age: <Span>{now - new Date(nany.birthday).getFullYear()}</Span>
            </Li>
            <Li>
              Experience: <Span>{nany.experience}</Span>
            </Li>
            <Li>
              Kids Age: <Span>{nany.kids_age}</Span>
            </Li>
            <Li>
              Characters: <Span>{nany.characters.join(',')}</Span>
            </Li>
            <Li>
              Education: <Span>{nany.education}</Span>
            </Li>
          </UlAbout>
          <P>
            Being with children brings joy to my day. I've worked with children
            of various age groups, including those with special needs. My
            approach is hands-on, engaging, and tailored to each child's unique
            personality
          </P>
          <ButtonRead
            type="button"
            onClick={() => setShow(true)}
            style={{ display: show ? 'none' : 'block' }}
          >
            Read more
          </ButtonRead>

          {show && (
            <div>
              <ul>
                {nany.reviews.map(({ reviewer, rating, comment }) => {
                  return (
                    <LiText>
                      <ReadWrap>
                        <ReadLogo>
                          <ReadSpan>{reviewer.slice(0, 1)}</ReadSpan>
                        </ReadLogo>
                        <ReadWrapS>
                          <H3>{reviewer}</H3>
                          <Locat>
                            <Star />
                            {rating}
                          </Locat>
                        </ReadWrapS>
                      </ReadWrap>

                      <Text>{comment}</Text>
                    </LiText>
                  );
                })}
              </ul>
              {isOpen && (
                <Modalca toggleModal={toggleModal}>
                  <Appointment nany={nany} />
                </Modalca>
              )}
              <Button
                type="button"
                onClick={() => setIsOpen(true)}
                style={{ display: isOpen ? 'none' : 'block' }}
              >
                Make an appointment
              </Button>
            </div>
          )}
        </WrapAbout>
      </Wrap>
    </LiItem>
  );
};
