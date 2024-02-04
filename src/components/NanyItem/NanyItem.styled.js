import styled from 'styled-components';
import { ReactComponent as IconNorm } from '../../img/normal.svg';
import { ReactComponent as IconMap } from '../../img/map.svg';
import { ReactComponent as IconStar } from '../../img/star.svg';
import { ReactComponent as IconPin } from '../../img/pin.svg';

export const Map = styled(IconMap)``;
export const Star = styled(IconStar)`
  margin-right: 4px;
`;
export const Pin = styled(IconPin)`
  margin: 0px 16px;
`;
export const Hard = styled(IconNorm)`
  width: 22px;
  height: 19px;
  stroke: black;
  stroke-width: 2px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  flex-wrap: nowrap;
  /* gap: 20px; */
`;
export const Li = styled.li`
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  border-radius: 24px;
  background: rgb(243, 243, 243);
  padding: 8px 16px;
  color: rgb(138, 138, 137);
  margin: 0;
`;
export const UlAbout = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-self: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const Span = styled.span`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
`;
export const Title = styled.h2`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  color: rgb(17, 16, 28);
  margin-bottom: 24px;
`;
export const P = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  color: rgba(17, 16, 28, 0.5);
  margin-bottom: 14px;
`;
export const ButtonRead = styled.button`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  text-decoration-line: underline;
  background-color: transparent;
`;
export const Img = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 15px;
  background: rgb(224, 224, 224);
  object-fit: cover;
`;

export const LiItem = styled.li`
  width: 1184px;
  border-radius: 24px;
  background: rgb(251, 251, 251);
  padding: 24px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: flex-srart;
  align-self: center;
  gap: 24px;
`;

export const WrapAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-srart;
`;
export const ButtonFavorite = styled.button`
  background-color: transparent;
  margin-left: 50px;
`;

export const SpanN = styled.span`
  color: rgb(138, 138, 137);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  margin-bottom: 8px;
`;

export const Locat = styled.li`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const SpanPrice = styled.span`
  color: rgb(56, 205, 62);
`;

export const Button = styled.button`
  color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  border-radius: 30px;
  background: rgb(16, 57, 49);
  padding: 14px 28px;
`;

export const ReadLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(16, 57, 49, 0.2);
  margin-right: 12px;
`;
export const ReadSpan = styled.span`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
`;

export const ReadWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ReadWrapS = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const H3 = styled.h3`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  margin-bottom: 2px;
`;
export const Text = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  margin-top: 16px;
`;

export const LiText = styled.li`
  margin-bottom: 25px;
`;