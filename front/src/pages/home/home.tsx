import React from 'react';
import {Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
import PageMover from '../../utils/PageMover';
import HomeDefault from '../../components/homeDefault';
import Routine from '../../components/editRoutine';
/**
 * 테스트용으로 작성해놓은 부분입니다.
 */
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
  const makeNewRoutineClick = () => {
    PageMover.goTo('/editRoutine');
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
              <Nav.Link>See All Meetings</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>About</Nav.Link>
              {/* title 에 componenet 도 집어넣을 수 있음. 따라서 추후에 User 의 Image 로 변경될 것 */}
              <NavDropdown title="Login-In" id="collasible-nav-dropdown">
                <NavDropdown.Item>My Routines</NavDropdown.Item>
                <NavDropdown.Item>Imminent Routines</NavDropdown.Item>
                <NavDropdown.Item onClick={makeNewRoutineClick}>
                  Make new Routine
                </NavDropdown.Item>
                <NavDropdown.Item>Make new Meeting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path={''} element={<HomeDefault></HomeDefault>}></Route>
        <Route path={'/editRoutine'} element={<Routine></Routine>} />
        <Route path={'/aaa'} element={<Temp2></Temp2>} />
        <Route path={'/profile'} element={<Temp3></Temp3>} />
      </Routes>
      <br></br>
      <div className="footer">Produced by Team.Under4</div>
    </>
  );
}

export default Home;
