import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, Routes, Route, useLocation} from 'react-router-dom';
import PageMover from '../../utils/PageMover';

/**
 * 테스트용으로 작성해놓은 부분입니다.
 */
function Temp(): JSX.Element {
  return <div>Temp!</div>;
}
function Temp2(): JSX.Element {
  return <div>Temp222222</div>;
}
function Temp3(): JSX.Element {
  return <div>isLogined!</div>;
}

function Home(): JSX.Element {
  const location = useLocation();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link to="/asdf">asdf!</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/aaa">aaa</Link>
              </Nav.Item>
              <Nav.Item
                onClick={() => {
                  PageMover.goToReportPage({
                    fromURL: 'test',
                    error: 'testerror',
                  });
                }}
              >
                goToReport
              </Nav.Item>
              <Nav.Item
                onClick={() => {
                  PageMover.goToLoginPage();
                }}
              >
                Login
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path={'/asdf'} element={<Temp></Temp>} />
        <Route path={'/aaa'} element={<Temp2></Temp2>} />
        <Route path={'/profile'} element={<Temp3></Temp3>} />
      </Routes>
    </>
  );
}

export default Home;
