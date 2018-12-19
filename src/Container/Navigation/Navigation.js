import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import styled from 'styled-components';


const NavigationWrapper = styled.div`
#basic-nav-dropdown {
  color: white;
 font-weight: bold;
  
}

`

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Navbar inverse collapseOnSelect
        style={{
          background: "#30acf1",
          border: "none",
        }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand"
              style={{
                color: "white",
                fontWeight: "bold"
              }}
            >Twitter clone</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2} href="#"
            >
              <span href="..."
                style={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Fsw16
          </span>
            </NavItem>
            <NavDropdown
              eventKey={3
              } title="Dropdown"
              id="basic-nav-dropdown"


            >
              <MenuItem eventKey={3.1}>Home</MenuItem>
              <MenuItem eventKey={3.2}>Your Profile</MenuItem>
              <MenuItem eventKey={3.3}>Settings</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigationWrapper>
  );
}

export default Navigation;