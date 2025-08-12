import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaSpotify, FaApple, FaYoutube, FaInstagram, FaTiktok, FaChevronLeft, FaChevronRight, FaFacebook, FaPatreon } from 'react-icons/fa';

const CarouselContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(135deg, #000000 0%, #1a0000 50%, #2d0000 100%);
`;

const CarouselSlide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;
  background-color: #1a1a1a;
`;

const CarouselOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4)
  );
  z-index: 2;
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
`;

const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 4;
  
  &:hover {
    background: rgba(255, 0, 0, 0.8);
    border-color: #ff0000;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const CarouselArrowLeft = styled(CarouselArrow)`
  left: 20px;
  
  @media (max-width: 768px) {
    left: 10px;
  }
`;

const CarouselArrowRight = styled(CarouselArrow)`
  right: 20px;
  
  @media (max-width: 768px) {
    right: 10px;
  }
`;

const CarouselDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#ff0000' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#ff0000' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

const CarouselContent = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 3;
  max-width: 800px;
  width: 90%;
`;

const CarouselSubtitle = styled(motion.p)`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Orbitron', 'Arial Black', 'Helvetica Bold', sans-serif;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

const CarouselButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CarouselButton = styled(motion.button)`
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const CarouselSocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const CarouselSocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;



const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);

  const images = [
    '/band-photo-1.jpg',
    '/band-photo-2.jpg', 
    '/band-photo-3.jpg',
    '/band-photo-4.jpg'
  ];

  // Fallback background colors for when images aren't loaded
  const fallbackColors = [
    'linear-gradient(135deg, #1a0000 0%, #2d0000 50%, #400000 100%)',
    'linear-gradient(135deg, #00001a 0%, #00002d 50%, #000040 100%)',
    'linear-gradient(135deg, #1a1a00 0%, #2d2d00 50%, #404000 100%)',
    'linear-gradient(135deg, #001a1a 0%, #002d2d 50%, #004040 100%)'
  ];

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.02
    },
    center: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.98
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setTimeLeft(5);
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    setTimeLeft(5);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    setTimeLeft(5);
  };

  return (
    <CarouselContainer>
      <AnimatePresence mode="popLayout">
        <CarouselSlide
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: `url(${images[currentIndex]})`
          }}
        />
      </AnimatePresence>
      
      <CarouselOverlay />
      
      <CarouselArrowLeft onClick={handlePrevious}>
        <FaChevronLeft />
      </CarouselArrowLeft>
      
      <CarouselArrowRight onClick={handleNext}>
        <FaChevronRight />
      </CarouselArrowRight>
      
      <CarouselContent>
        <CarouselSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Scandinavian Premium Sleaze Hair Metal
        </CarouselSubtitle>
        

        
        <CarouselSocialLinks
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CarouselSocialIcon href="https://facebook.com/smokingsnakesofsweden" target="_blank">
            <FaFacebook />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://open.spotify.com/artist/4QanEE5Wrkq1JhWMpWKz4f?si=tYmQ49OiQT-KxGhyFoTEmA" target="_blank">
            <FaSpotify />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://music.apple.com/us/artist/smoking-snakes/1618982403" target="_blank">
            <FaApple />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://youtube.com/@smokingsnakesofsweden" target="_blank">
            <FaYoutube />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://instagram.com/smokingsnakesofsweden" target="_blank">
            <FaInstagram />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://tiktok.com/@smokingsnakesofsweden" target="_blank">
            <FaTiktok />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://www.patreon.com/SmokingSnakes" target="_blank">
            <FaPatreon />
          </CarouselSocialIcon>
        </CarouselSocialLinks>
      </CarouselContent>
      
      <CarouselDots>
        {images.map((_, index) => (
          <CarouselDot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default ImageCarousel;
