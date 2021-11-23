import React from 'react';
import {Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
import PageMover from '../../utils/PageMover';
import HomeDefault from '../../components/homeDefault';
/**
 * 테스트용으로 작성해놓은 부분입니다.
 */
function Temp(): JSX.Element {
  console.log(performance.navigation.type);
  return <div>Temp!</div>;
}
function Temp2(): JSX.Element {
  return <div>Temp222222</div>;
}
function Temp3(): JSX.Element {
  return <div>isLogined!</div>;
}

function Home(): JSX.Element {
  const brandClick = () => {
    PageMover.goToHomePage();
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={brandClick}>Routine Force</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>See All Routines</Nav.Link>
              <Nav.Link>Make Routine</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>About</Nav.Link>
              {/* title 에 componenet 도 집어넣을 수 있음. 따라서 추후에 User 의 Image 로 변경될 것 */}
              <NavDropdown title="Login-In" id="collasible-nav-dropdown">
                <NavDropdown.Item>My Routines</NavDropdown.Item>
                <NavDropdown.Item>Imminent Routines</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path={''} element={<HomeDefault></HomeDefault>}></Route>
        <Route path={'/asdf'} element={<Temp></Temp>} />
        <Route path={'/aaa'} element={<Temp2></Temp2>} />
        <Route path={'/profile'} element={<Temp3></Temp3>} />
      </Routes>
    </>
  );
}

export default Home;
