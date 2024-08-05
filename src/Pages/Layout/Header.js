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
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const handleNavClick = (path) => {
    setActiveItem(path);
  };

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
          <NavLink
            href="/"
            className={activeItem === '/' ? 'active' : ''}
            onClick={() => handleNavClick('/')}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/about"
            className={activeItem === '/about' ? 'active' : ''}
            onClick={() => handleNavClick('/about')}
          >
            About Us
          </NavLink>
        </NavItem>
        <Dropdown
          nav
          isOpen={isDropdownOpen}
          toggle={() => setIsDropdownOpen(!isDropdownOpen)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DropdownToggle nav>
            <Link
              to="/industries"
              className={`industriesNavbar ${activeItem === '/industries' ? 'active' : ''}`}
              onClick={() => handleNavClick('/industries')}
            >
              Industries <i className="fas fa-caret-down"></i>
            </Link>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <ScrollLink to="constructor" smooth={false} duration={500}>Construction</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="mining" smooth={false} duration={500}>Mining</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="urbanplanning" smooth={false} duration={500}>Urban Planning</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="renewableenergy" smooth={false} duration={500}>Renewable Energy</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="gis" smooth={false} duration={500}>GIS</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="roadsrailways" smooth={false} duration={500}>Roads & Railways</ScrollLink>
            </DropdownItem>
            <DropdownItem>
              <ScrollLink to="oilgas" smooth={false} duration={500}>Oil & Gas</ScrollLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink
            href="/krishi"
            className={activeItem === '/krishi' ? 'active' : ''}
            onClick={() => handleNavClick('/krishi')}
          >
            KRISHI 3.0
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/rpto"
            className={activeItem === '/rpto' ? 'active' : ''}
            onClick={() => handleNavClick('/rpto')}
          >
            RPTO
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/products"
            className={activeItem === '/products' ? 'active' : ''}
            onClick={() => handleNavClick('/products')}
          >
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/contactUs"
            className={activeItem === '/contactUs' ? 'active' : ''}
            onClick={() => handleNavClick('/contactUs')}
          >
            Contact Us
          </NavLink>
        </NavItem>
      </Nav>
      <Button color="dark" className="free-quote-btn">
        Free Quote
      </Button>
    </Navbar>
  );
};

export default Header;
