import { NavLink, Outlet } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import {
  Logo,
  Link,
  Header,
  ButtonLogin,
  ButtonReg,
  DivButton,
  NavList,
  Nav,
  Container,
  ContainerH,
  IconLogoUser,
  IconDiv,
  ButtonlogOut,
  Name,
  LogoNany,
  Burger,
} from './Layout.styles';
import { selectIsLogin, logOut } from '../../redux/UserSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Modalca } from 'components/Modal/Modal';
import { Login } from 'components/Login/Login';
import { RegistrationForm } from 'components/RegistrationForm/Registration';

export const Layout = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  const toggleModal = e => {
    setIsOpen(!isOpen);
  };
  const toggleModalReg = e => {
    setIsOpenReg(!isOpenReg);
  };
  const logOuts = e => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logOut());
      })
      .catch(error => {});
  };

  return (
    <Container>
      <ContainerH>
        <Header>
          <NavLink to="/">
            <LogoNany />
          </NavLink>
          <Logo to="/"> Nanny.Services </Logo>
          {isLogin ? (
            <Nav>
              <NavList>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/nannies">Nannies</Link>
                </li>
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
              </NavList>
              <Burger />
              <DivButton>
                <IconDiv>
                  <IconLogoUser />
                </IconDiv>
                <Name>name</Name>
                <ButtonlogOut onClick={logOuts}>Log Out</ButtonlogOut>
              </DivButton>
            </Nav>
          ) : (
            <Nav>
              <NavList>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/nannies">Nannies</Link>
                </li>
              </NavList>
              <Burger />
              <DivButton>
                <ButtonLogin type="button" onClick={() => setIsOpen(true)}>
                  Log In
                </ButtonLogin>
                {isOpen && (
                  <Modalca toggleModal={toggleModal}>
                    <Login />
                  </Modalca>
                )}
                <ButtonReg type="button" onClick={() => setIsOpenReg(true)}>
                  Registration
                </ButtonReg>
                {isOpenReg && (
                  <Modalca toggleModal={toggleModalReg}>
                    <RegistrationForm />
                  </Modalca>
                )}
              </DivButton>
            </Nav>
          )}
        </Header>
      </ContainerH>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
