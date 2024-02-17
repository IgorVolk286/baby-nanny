// import background from '../../img/home-back.jpg';

import styled from 'styled-components';

export const Section = styled.section`
  width: 1440px;
  height: 850px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 15px;
  background: rgb(243, 243, 243);
  margin: 0px auto;

  @media (min-width: 768px) {
    width: 768px;
    height: auto;
    padding: 64px 32px;
    background: rgb(243, 243, 243);
    margin: 0px auto;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
