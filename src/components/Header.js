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
  
  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }
  
  @media (max-width: 900px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
  }
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
  
  @media (max-width: 1024px) {
    height: 350px;
    max-width: 1400px;
    margin: -90px 0;
  }
  
  @media (max-width: 900px) {
    height: 320px;
    max-width: 1200px;
    margin: -80px 0;
  }
  
  @media (max-width: 768px) {
    height: 280px;
    max-width: 1000px;
    margin: -70px 0;
  }
  
  @media (max-width: 480px) {
    height: 240px;
    max-width: 800px;
    margin: -60px 0;
  }
`;

const NavLinks = styled.div`
  display: flex !important;
  gap: 2rem;
  
  @media (max-width: 1200px) {
    gap: 1.5rem !important;
  }
  
  @media (max-width: 1024px) {
    gap: 1rem !important;
  }
  
  @media (max-width: 950px) {
    gap: 0.8rem !important;
  }
  
  @media (max-width: 900px) {
    display: none !important;
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
  min-height: 44px;
  min-width: 44px;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.1);
  }
  
  @media (max-width: 1200px) {
    padding: 0.4rem 0.8rem !important;
    font-size: 0.9rem !important;
  }
  
  @media (max-width: 1024px) {
    padding: 0.3rem 0.6rem !important;
    font-size: 0.85rem !important;
  }
  
  @media (max-width: 950px) {
    padding: 0.25rem 0.5rem !important;
    font-size: 0.8rem !important;
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
  min-height: 44px;
  min-width: 44px;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.3);
    border-color: #ff0000;
  }
  
  @media (max-width: 1200px) {
    padding: 0.4rem 0.8rem !important;
    font-size: 0.9rem !important;
  }
  
  @media (max-width: 1024px) {
    padding: 0.3rem 0.6rem !important;
    font-size: 0.85rem !important;
  }
  
  @media (max-width: 950px) {
    padding: 0.25rem 0.5rem !important;
    font-size: 0.8rem !important;
  }
  
  @media (max-width: 900px) {
    display: none !important;
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
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 1001;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    background: rgba(255, 0, 0, 0.2);
  }
  
  @media (max-width: 900px) {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    min-width: 48px;
    min-height: 48px;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.98) 0%, rgba(20, 0, 0, 0.95) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99999;
  padding: 0;
  overflow: visible;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const MobileMenuHeader = styled.div`
  text-align: center;
  margin: 0;
  padding: 2rem 1rem 1rem 1rem;
  border-bottom: 1px solid rgba(255, 0, 0, 0.3);
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  
  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem 0.75rem 0.75rem;
  }
`;

const MobileMenuTitle = styled.h2`
  color: #ff0000;
  font-size: 1.5rem;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    letter-spacing: 1.5px;
  }
`;

const MobileMenuSubtitle = styled.p`
  color: #cccccc;
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
  opacity: 0.8;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
  padding: 1.5rem 1rem;
  
  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
    gap: 0.4rem;
  }
`;

const MobileNavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 52px;
  width: 100%;
  justify-content: flex-start;
  text-align: left;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.15);
    border-color: rgba(255, 0, 0, 0.4);
    transform: translateX(5px);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.2);
    border-color: #ff0000;
    transform: translateX(5px) scale(0.98);
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.875rem 1.25rem;
    min-height: 48px;
  }
`;

const MobilePressKitLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.25), rgba(255, 0, 0, 0.15));
  border: 1px solid rgba(255, 0, 0, 0.5);
  min-height: 52px;
  width: 100%;
  justify-content: flex-start;
  text-align: left;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: #ff0000;
    background: linear-gradient(45deg, rgba(255, 0, 0, 0.35), rgba(255, 0, 0, 0.25));
    border-color: #ff0000;
    transform: translateX(5px);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    color: #ff0000;
    background: linear-gradient(45deg, rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.35));
    border-color: #ff0000;
    transform: translateX(5px) scale(0.98);
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.875rem 1.25rem;
    min-height: 48px;
  }
`;

const MobileMenuFooter = styled.div`
  margin: 0;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  
  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const MobileMenuFooterText = styled.p`
  color: #888888;
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.7;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 0, 0, 0.3);
  border: 1px solid rgba(255, 0, 0, 0.5);
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.4);
    border-color: #ff0000;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
    font-size: 1.1rem;
    min-width: 40px;
    min-height: 40px;
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
            
            <MobileMenuHeader>
              <MobileMenuTitle>Menu</MobileMenuTitle>
              <MobileMenuSubtitle>Navigate the Smoking Snakes universe</MobileMenuSubtitle>
            </MobileMenuHeader>
            
            <MobileMenuContent>
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                >
                  {item.icon}
                  {item.label}
                </MobileNavLink>
              ))}
              <MobilePressKitLink href={pressKitUrl} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                <FaFileAlt />
                Press Kit
              </MobilePressKitLink>
            </MobileMenuContent>
            
            <MobileMenuFooter>
              <MobileMenuFooterText>© 2025 Smoking Snakes</MobileMenuFooterText>
            </MobileMenuFooter>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;

