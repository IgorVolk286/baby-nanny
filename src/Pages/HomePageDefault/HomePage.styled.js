import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0px auto;
  background: rgb(16, 57, 49);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 768px;
    padding: 10px 32px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    height: 700px;
  }
`;
