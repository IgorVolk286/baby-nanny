import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  color: rgb(251, 251, 251);

  font-family: Helvetica Neue;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -2%;
`;

export const Link = styled(NavLink)`
  color: rgb(251, 251, 251);
  position: relative;
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -1%;
  &.active::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    left: 15px;
    right: -35px;
    top: 24px;
    bottom: -24px;
    background-color: #ffffff;
    border-radius: 50%;
  }
`;

export const Container = styled.div`
  width: 1440px;
  height: 736px;
  padding: 0px 32px;
  border-radius: 30px;
  background: rgb(16, 57, 49);
  margin: 0 auto;
`;

export const Header = styled.header`
  /* outline: 1px solid red; */
  position: absolute;
  width: 1184px;
  height: 48px;
  left: 250px;

  top: 32px;
  bottom: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;
export const ButtonLogin = styled.button`
  color: rgb(251, 251, 251);
  font-family: Helvetica Neue;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  width: 124px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 39px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
`;
export const ButtonReg = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 40px;
  margin: 0px 8px;
  border-radius: 30px;
  background: rgb(16, 57, 49);
  border: 1px solid #ffffff;
  &:hover {
    background: rgba(16, 57, 49, 0.2);
    color: rgb(16, 57, 49);
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-right: 92px;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// export const Wrap= styled.
