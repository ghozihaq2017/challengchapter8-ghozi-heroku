import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './AppBar.module.css';
import AuthContext from '../../store/auth-context';

function AppBar() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    authCtx.logout();
    navigate('/auth');
  };
  return (
    <Navbar expand="lg" className={`${styles.navbar} mt-3`}>
      <Container>
        <Navbar.Brand href="#home" className={`${styles.logo}`}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="me-4">
              Our Services
            </Nav.Link>
            <Nav.Link href="#link" className="me-4">
              Why Us
            </Nav.Link>
            <Nav.Link href="#link" className="me-4">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#link" className="me-4">
              FAQ
            </Nav.Link>
            <Button variant="success" className={`${styles['btn-green']}`} onClick={logoutHandler}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
