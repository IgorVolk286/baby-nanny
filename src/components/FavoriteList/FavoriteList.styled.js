import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
`;
// export const Button = styled.button`
//   display: block;
//   border-radius: 30px;
//   background: rgb(16, 57, 49);
//   padding: 14px 40px;
//   background: rgb(16, 57, 49);
//   color: rgb(251, 251, 251);
//   font-family: Helvetica Neue;
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 20px;
//   letter-spacing: -1%;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 50px;
// `;
export const Label = styled.label`
  color: rgb(138, 138, 137);
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0%;
`;

export const Selects = styled.select`
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
  padding: 10px 18px;
  border-radius: 14px;
  width: 226px;
  height: 48px;
  border: 2px solid rgb(251, 251, 251);
  /* color: rgb(251, 251, 251); */
  & option:checked {
    color: rgb(17, 16, 28);
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0%;
  }

  & option {
    color: rgba(17, 16, 28, 0.3);
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    border-radius: 14px;
  }
  & select option {
    border-radius: 14px;
  }
`;

export const Form = styled.form`
  margin-bottom: 32px;
  margin-left: 100px;
`;
