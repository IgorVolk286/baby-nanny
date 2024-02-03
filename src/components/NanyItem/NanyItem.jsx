import { Hard } from '../NanyItem/NanyItem.styled';
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
} from '../NanyItem/NanyItem.styled';

export const NanyItem = ({ nany }) => {
  const now = new Date().getFullYear();

  return (
    <LiItem>
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
          <ButtonFavorite type="button">
            <Hard />
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
              Age:<Span>{now - new Date(nany.birthday).getFullYear()}</Span>
            </Li>
            <Li>
              Experience:<Span>{nany.experience}</Span>
            </Li>
            <Li>
              Kids Age: <Span>{nany.kids_age}</Span>
            </Li>
            <Li>
              Characters:<Span>{nany.characters.join(',')}</Span>
            </Li>
            <Li>
              Education:<Span>{nany.education}</Span>
            </Li>
          </UlAbout>
          <P>
            Being with children brings joy to my day. I've worked with children
            of various age groups, including those with special needs. My
            approach is hands-on, engaging, and tailored to each child's unique
            personality
          </P>
          <ButtonRead type="button">Read more</ButtonRead>
        </WrapAbout>
      </Wrap>
    </LiItem>
  );
};
