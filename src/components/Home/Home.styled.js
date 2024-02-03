import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 70px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: -3%;
  margin-bottom: 28px;
`;
export const P = styled.p`
  color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 28px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -2%;
  margin-bottom: 64px;
`;

export const NavLin = styled(NavLink)`
  color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -1%;
  text-align: left;
  margin-right: 18px;
`;

export const ButtonGet = styled.button`
  display: block;
  padding: 18px 50px;
  box-sizing: border-box;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  background: rgb(16, 57, 49);
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  width: 517px;
  height: 322px;
  left: 250px;
  right: 795px;
  top: 250px;
  bottom: 195px;
  padding: 0px;
  margin-bottom: 163px;
`;
