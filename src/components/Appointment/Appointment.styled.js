import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const Input = styled(Field)`
  display: block;
  width: 270px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  ::placeholder {
    color: rgb(17, 16, 28);
    font-family: Helvetica Neue;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
  }

  @media (min-width: 768px) {
    width: 232px;
    height: 52px;
    padding: 16px;
    border-radius: 12px;
    ::placeholder {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
export const InputOne = styled(Field)`
  width: 270px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  ::placeholder {
    color: rgb(17, 16, 28);
    font-family: Helvetica Neue;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0%;
  }

  @media (min-width: 768px) {
    width: 470px;
    height: 52px;
    padding: 16px;
    border-radius: 12px;
    ::placeholder {
      font-size: 16px;

      line-height: 20px;
    }
  }
`;

export const InputAria = styled(Field)`
  width: 270px;
  height: 70px;
  padding: 5px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 10px;
  margin-bottom: 10px;
  &::placeholder {
    color: rgb(17, 16, 28);
    font-family: Helvetica Neue;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
  }
  @media (min-width: 768px) {
    width: 472px;
    height: 116px;
    padding: 16px;

    border-radius: 12px;
    margin-bottom: 24px;
    &::placeholder {
      font-size: 16px;

      line-height: 20px;
    }
  }
`;

export const Title = styled.h1`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 30px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -2%;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    size: 40px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  color: rgba(17, 16, 28, 0.5);
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 40px;
  }
`;
export const Button = styled.button`
  padding: 10px 118px;
  border-radius: 30px;
  background: var(--main-color--);
  color: #ffffff;

  &:hover {
    background: rgba(16, 57, 49, 0.2);
    color: rgb(16, 57, 49);
  }
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 190px;
    border-radius: 30px;
    background: var(--main-color--);
    color: #ffffff;

    &:hover {
      background: rgba(16, 57, 49, 0.2);
      color: rgb(16, 57, 49);
    }
  }
`;
export const Forma = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 4px;

  @media (min-width: 768px) {
    margin-top: 40px;
    gap: 8px;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Divv = styled.div`
  display: flex;
  gap: 14px;
`;
export const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgb(224, 224, 224);
`;
export const H2 = styled.h2`
  color: rgb(17, 16, 28);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
`;
export const P = styled.p`
  color: rgb(138, 138, 137);
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0%;
`;
export const Wrap = styled.div`
  width: 100%;
  padding: 0px;
  height: auto;
  overflow-y: auto;
`;
export const ErrorMes = styled(ErrorMessage)`
  color: red;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
