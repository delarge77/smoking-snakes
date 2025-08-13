import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMusic, FaHome, FaCalendarAlt, FaInfoCircle, FaEnvelope, FaVideo, FaTshirt, FaFileAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 0, 0, 0.3);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    opacity: 0.8;
  }
`;

const LogoImage = styled.img`
  height: 400px;
  width: auto;
  max-width: 1600px;
  margin: -100px 0;
  
  @media (max-width: 768px) {
    height: 320px;
    max-width: 1200px;
    margin: -80px 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? '#ff0000' : '#ffffff'};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.1);
  }
`;

const PressKitLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid rgba(255, 0, 0, 0.3);
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.3);
    border-color: #ff0000;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  z-index: 1001;
  padding: 6rem 1rem 2rem 1rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const MobileNavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 60px;
  width: 100%;
  max-width: 300px;
  justify-content: center;
  text-align: center;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.1);
  }
  
  &:active {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.2);
  }
`;

const MobilePressKitLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid rgba(255, 0, 0, 0.3);
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.3);
    border-color: #ff0000;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: #ff0000;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/videos', label: 'Videos', icon: <FaVideo /> },
    { path: '/merchandise', label: 'Merchandise', icon: <FaTshirt /> },
    { path: '/tour', label: 'Tour', icon: <FaCalendarAlt /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const pressKitUrl = '/Smoking-Snakes-Press-Kit.html';

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <LogoImage src="/logo.png" alt="Smoking Snakes" />
        </Logo>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              active={location.pathname === item.path}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
          <PressKitLink href={pressKitUrl} target="_blank" rel="noopener noreferrer">
            <FaFileAlt />
            Press Kit
          </PressKitLink>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          <FaBars />
        </MobileMenuButton>
      </Nav>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={closeMobileMenu}>
              <FaTimes />
            </CloseButton>
            {console.log('Rendering mobile menu with items:', navItems)}
            {navItems.map((item) => {
              console.log('Rendering item:', item);
              return (
                <MobileNavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                >
                  {item.icon}
                  {item.label}
                </MobileNavLink>
              );
            })}
            <MobilePressKitLink href={pressKitUrl} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
              <FaFileAlt />
              Press Kit
            </MobilePressKitLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
