import backgrounds from '../../img/background.png';
import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  height: 650px;
  background: url(${backgrounds});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f6f6f6;

  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1440px) {
    width: 1376px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-family: Helvetica Neue;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -2%;
  text-align: left;
`;
