import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -3%;
  margin-bottom: 28px;
  width: 240px;

  @media (min-width: 768px) {
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 40px;
    font-weight: 500;
    line-height: 70px;
    letter-spacing: -3%;
    margin-bottom: 28px;
    width: 350px;
  }

  @media (min-width: 1440px) {
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 70px;
    font-weight: 500;
    line-height: 70px;
    letter-spacing: -3%;
    margin-bottom: 28px;
    width: 100%;
  }
`;
export const P = styled.p`
  color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -2%;
  margin-bottom: 64px;
  width: 250px;

  @media (min-width: 768px) {
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 28px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -2%;
    margin-bottom: 64px;
    width: 100%;
  }

  @media (min-width: 1440px) {
    /* color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 28px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -2%;
    margin-bottom: 64px;
    width: 100%; */
  }
`;

export const NavLin = styled(NavLink)`
  color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -1%;
  text-align: left;
  margin-right: 18px;

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const ButtonGet = styled.button`
  display: block;
  padding: 10px 50px;
  box-sizing: border-box;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  background: transparent;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    display: block;
    padding: 18px 50px;
    box-sizing: border-box;
    border: 1px solid rgba(251, 251, 251, 0.4);
    border-radius: 30px;
    background: rgb(16, 57, 49);
  }

  @media (min-width: 1440px) {
    /* display: block;
    padding: 18px 50px;
    box-sizing: border-box;
    border: 1px solid rgba(251, 251, 251, 0.4);
    border-radius: 30px;
    background: rgb(16, 57, 49); */
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 320px;
  height: 322px;
  margin-top: 30px;
  padding: 20px;
  margin-bottom: 30px;
  padding: 10px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    width: 450px;
    height: 250px;
    margin-left: 40px;
    margin-top: 40px;

    padding: 0px;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    width: 517px;
    height: 322px;
    margin-left: 96px;
    margin-top: 163px;
    margin-bottom: 163px;
  }
`;
