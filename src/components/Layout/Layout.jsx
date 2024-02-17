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
  Menu,
  ButtonMenu,
} from './Layout.styles';
import { selectIsLogin, logOut } from '../../redux/UserSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { Modalca } from 'components/Modal/Modal';
import { Login } from 'components/Login/Login';
import { RegistrationForm } from 'components/RegistrationForm/Registration';
import { useOutSide } from '../../hooks/outSide';
import { useNavigate } from 'react-router-dom';
export const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);
  console.log(isOpenReg);
  const [menu, setMenu] = useState(false);

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
        navigate('/', { replace: true });
        setMenu(false);
        setIsOpen(false);
      })
      .catch(error => {});
  };
  const menuRef = useRef(null);
  useOutSide(menuRef, () => {
    setMenu(false);
  });

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
              <ButtonMenu type="button" onClick={() => setMenu(!menu)}>
                <Burger />
              </ButtonMenu>
              {menu && (
                <Menu ref={menuRef}>
                  <ButtonlogOut
                    type="button"
                    onClick={() => {
                      setMenu(!menu);
                      logOuts();
                    }}
                  >
                    Log Out
                  </ButtonlogOut>
                </Menu>
              )}
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
              <ButtonMenu type="button" onClick={() => setMenu(!menu)}>
                <Burger />
              </ButtonMenu>
              {menu && (
                <Menu ref={menuRef}>
                  <ButtonLogin
                    type="button"
                    onClick={() => {
                      setIsOpen(true);
                      setMenu(!menu);
                    }}
                  >
                    Log In
                  </ButtonLogin>

                  <ButtonReg type="button" onClick={() => setIsOpenReg(true)}>
                    Registration
                  </ButtonReg>
                </Menu>
              )}

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
