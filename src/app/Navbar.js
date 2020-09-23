import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

import logo from '../logos/echologo.png';

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
              <Navbar.Brand href='/'>
                {/* <img src={logo} className='nav-logo' alt='logo' /> */}
                <img
                  src={logo}
                  className='d-inline-block align-top'
                  height='30'
                  width='30'
                  padding='10'
                  alt='logo'
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                  {/* <Nav.Link href='#home'>Home</Nav.Link> */}

                  <Nav.Link href='/playlists'>Playlists</Nav.Link>
                  {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                      <NavDropdown.Item href='#action/3.1'>
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.2'>
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action/3.3'>
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Form inline>
                  <Nav.Link href='/profile'>Profile</Nav.Link>
                  {/* <Button variant='outline-success'>Sign Up</Button> */}
                  <Button variant='outline-success'>Login</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapNavbar;
