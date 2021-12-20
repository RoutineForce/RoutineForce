import React from 'react';
import PageMover from '../../utils/PageMover';
import {Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';
import API from '../../api/APIUtil';

const loginstate = null;

export default function Navbarc(): JSX.Element {
  const brandClick = () => {
    PageMover.goToHomePage();
  };

  const makeNewRoutineClick = () => {
    PageMover.goTo('./editRoutine');
  };

  const seeAllRoutineClick = () => {
    PageMover.goTo('./viewAllRoutines');
  };

  const seeAllMeetingClick = () => {
    console.log('준비중!');
  };

  const seeLoginPageClick = () => {
    PageMover.goTo('./login');
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={brandClick}>Routine Force</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={seeAllRoutineClick}>See All Routines</Nav.Link>
              <Nav.Link onClick={seeAllMeetingClick}>See All Meetings</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>About</Nav.Link>
              {/* title 에 componenet 도 집어넣을 수 있음. 따라서 추후에 User 의 Image 로 변경될 것 */}
              {loginstate === null ? (
                <Nav.Link onClick={seeLoginPageClick}>Login</Nav.Link>
              ) : (
                <NavDropdown title="Login-In" id="collasible-nav-dropdown">
                  <NavDropdown.Item>My Routines</NavDropdown.Item>
                  <NavDropdown.Item>Interested Routines</NavDropdown.Item>
                  <NavDropdown.Item onClick={makeNewRoutineClick}>
                    Make new Routine
                  </NavDropdown.Item>
                  <NavDropdown.Item>Make new Meeting</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
