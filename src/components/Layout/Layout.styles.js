import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IconLogo } from '../../img/logoUser.svg';
import { ReactComponent as IconLogoNany } from '../../img/baby-svgrepo-com.svg';
import { ReactComponent as IconBurger } from '../../img/burger-menu-svgrepo-com.svg';

export const Burger = styled(IconBurger)`
  width: 15px;
  height: 15px;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const LogoNany = styled(IconLogoNany)`
  width: 20px;
  height: 20px;
  fill: #ffffff;
  margin-right: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled(NavLink)`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -2%;
    margin-right: 30px;
  }
  @media (min-width: 1440px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -2%;
  }
`;
export const IconLogoUser = styled(IconLogo)`
  width: 12px;
  height: 12px;

  @media (min-width: 768px) {
    width: 14px;
    height: 14px;
  }

  @media (min-width: 1440px) {
    width: 16px;
    height: 16px;
  }
`;
export const IconDiv = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgb(251, 251, 251);
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }
  @media (min-width: 1440px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
`;
export const ButtonlogOut = styled.button`
  display: none;
  /* color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  padding: 14px 39px;
  box-sizing: border-box;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  background-color: transparent; */

  @media (min-width: 768px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    padding: 10px 30px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -1%;
    padding: 14px 39px;
    box-sizing: border-box;
    border: 1px solid rgba(251, 251, 251, 0.4);
    border-radius: 30px;
    background-color: transparent;
  }
`;
export const Link = styled(NavLink)`
  color: rgb(251, 251, 251);
  position: relative;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -1%;
  &.active::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    left: 15px;
    right: -35px;
    top: 24px;
    bottom: -24px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    &.active::after {
      width: 8px;
      height: 8px;
    }
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -1%;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin: 0px auto;
  height: auto;

  @media (min-width: 768px) {
    width: 768px;
    height: auto;
    padding: 10px 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 10px 32px;
  }
`;
export const ContainerH = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 0px auto;
  background: rgb(16, 57, 49);

  @media (min-width: 768px) {
    width: 768px;
    height: auto;
    padding: 10px 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    height: auto;
    padding: 10px 32px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    background: rgb(16, 57, 49);
  }
`;
export const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0px auto;
  background: rgb(16, 57, 49);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  @media (min-width: 768px) {
    width: 100%;
    height: auto;
    justify-content: space-between;
    padding: 10px 32px;
  }

  @media (min-width: 1440px) {
    width: 1184px;
    height: auto;
    margin: 0px auto;
    justify-content: space-between;
    background: rgb(16, 57, 49);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`;
export const ButtonLogin = styled.button`
  background-color: transparent;

  @media (min-width: 768px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -1%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    border: 1px solid rgba(251, 251, 251, 0.4);
    border-radius: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 39px;
    border-radius: 30px;
  }
`;
export const ButtonReg = styled.button`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    margin: 0px 8px;
    border-radius: 20px;
    background: rgb(16, 57, 49);
    border: 1px solid #ffffff;
    &:hover {
      background: rgba(16, 57, 49, 0.2);
      color: rgb(16, 57, 49);
    }
  }
  @media (min-width: 1440px) {
    padding: 14px 40px;
    margin: 0px 8px;
    border-radius: 30px;
  }
`;

export const DivButton = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 30px;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin-right: 92px;
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Name = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -1%;
    margin-right: 24px;
  }
`;
