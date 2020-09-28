import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Logo from './Logo';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { useAuth0 } from '@auth0/auth0-react';

export const BootstrapNavbar = () => {
  const { isAuthenticated } = useAuth0();
  const authButton = isAuthenticated ? <LogoutButton /> : <LoginButton />;
  const navTabs = isAuthenticated ? (
    <Nav className='mr-auto'>
      <LinkContainer to='/profile'>
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/playlists'>
        <Nav.Link>Playlists</Nav.Link>
      </LinkContainer>
    </Nav>
  ) : (
    <div />
  );

  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <Logo />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              {navTabs}
              <Form inline>{authButton}</Form>
            </Navbar.Collapse>
          </Navbar>
          <br />
        </div>
      </div>
    </div>
  );
};

export default BootstrapNavbar;
