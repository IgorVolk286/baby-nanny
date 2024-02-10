import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background: rgb(251, 251, 251);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-right: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-top: 480px;

  @media (min-width: 768px) {
    width: 240px;
    height: 80px;
    border-radius: 20px;
    background: rgb(251, 251, 251);
  }

  @media (min-width: 1440px) {
    width: 284px;
    height: 118px;
    border-radius: 20px;
    background: rgb(251, 251, 251);
  }
`;
export const Svg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: rgb(16, 57, 49);
  padding: 8px 9px 9px 5px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    padding: 12px 8px 5px 9px;
  }

  @media (min-width: 1140px) {
    width: 54px;
    height: 54px;
    border-radius: 13px;

    padding: 19px 17px;
  }
`;
export const P = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0%;
  margin-bottom: 6px;
`;
export const Span = styled.span`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0%;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;
export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
