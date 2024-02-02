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
} from './Layout.styles';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo to="/"> Nanny.Services </Logo>
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
        {/* <NavList>
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
            <ButtonLogin type="button">Log In</ButtonLogin>
            <ButtonReg type="button">Registration</ButtonReg>
          </DivButton>
        </Nav> */}
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
