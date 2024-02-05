import { Outlet } from 'react-router-dom';
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
} from './Layout.styles';
import { selectIsLogin } from '../../redux/NaniesSlice.jsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Modalca } from 'components/Modal/Modal';
import { Login } from 'components/Login/Login';
import { RegistrationForm } from 'components/RegistrationForm/Registration';

export const Layout = () => {
  const isLogin = useSelector(selectIsLogin);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  const toggleModal = e => {
    setIsOpen(!isOpen);
  };
  const toggleModalReg = e => {
    setIsOpenReg(!isOpenReg);
  };

  return (
    <Container>
      <ContainerH>
        <Header>
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
              <DivButton>
                <ButtonLogin type="button">Log In</ButtonLogin>
                <ButtonReg type="button">Registration</ButtonReg>
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
