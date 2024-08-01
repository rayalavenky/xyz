import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '../../Assets/CSS/Header.css';
import logo from '../../Assets/Images/drogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <Navbar color="light" light expand="md" className="justify-content-between">
      <NavbarBrand href="/">
        <img
          src={logo}
          alt="SquaDrone"
          className='logo'
        />{' '}
      </NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About Us</NavLink>
        </NavItem>
        <Dropdown
          nav
          isOpen={isDropdownOpen}
          toggle={() => setIsDropdownOpen(!isDropdownOpen)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DropdownToggle nav >
          <Link to="/industries" className="industriesNavbar">
              Industries
            </Link>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <ScrollLink to="constructor" smooth={true} duration={500}>Construction</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="mining" smooth={true} duration={500}>Mining</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="urbanplanning" smooth={true} duration={500}>Urban Planning</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="renewableenergy" smooth={true} duration={500}>Renewable Energy</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="gis" smooth={true} duration={500}>GIS</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="roadsrailways" smooth={true} duration={500}>Roads & Railways</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="oilgas" smooth={true} duration={500}>Oil & Gas</ScrollLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/krishi">KRISHI 3.0</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/rpto">RPTO</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contactUs">Contact Us</NavLink>
        </NavItem>
      </Nav>
      <Button color="dark" className="free-quote-btn">
        Free Quote
      </Button>
    </Navbar>
  );
};

export default Header;
