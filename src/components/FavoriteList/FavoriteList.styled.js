import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
`;
export const Button = styled.button`
  display: block;
  border-radius: 15px;

  padding: 10px 20px;
  background: var(--main-color--);
  color: #ffffff;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  &:hover {
    border: 1px solid var(--main-color--);
    background: rgba(16, 57, 49, 0.2);
    color: var(--main-color--);
  }

  @media (min-width: 768px) {
    border-radius: 30px;
    background: rgb(16, 57, 49);
    padding: 14px 40px;
    font-size: 16px;
  }
`;
export const Label = styled.label`
  color: rgb(138, 138, 137);
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`;

export const Selects = styled.select`
  padding: 8px 16px;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  border: 2px solid rgb(251, 251, 251);
  /* color: rgb(251, 251, 251); */
  & option:checked {
    color: rgb(17, 16, 28);
    font-family: Helvetica Neue;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0%;
  }

  & option {
    color: rgba(17, 16, 28, 0.3);
    font-family: Helvetica Neue;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    border-radius: 14px;
  }
  & select option {
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    padding: 10px 18px;
    border-radius: 14px;
    width: 226px;
    height: 48px;

    & option:checked {
      font-size: 18px;
      font-weight: 500;
    }

    & option {
      font-size: 18px;

      border-radius: 14px;
    }
    & select option {
      border-radius: 14px;
    }
  }
`;

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;
