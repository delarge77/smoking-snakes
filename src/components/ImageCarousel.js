import React, { useState, useEffect, useRef } from 'react';
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
  
  @media (max-width: 768px) {
    height: 50vh;
  }
  
  @media (max-width: 480px) {
    height: 40vh;
  }
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
  
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center center;
  }
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
  gap: 8px;
  z-index: 3;
  
  @media (max-width: 768px) {
    bottom: 15px;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    bottom: 12px;
    gap: 5px;
  }
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
  min-width: 44px;
  min-height: 44px;
  
  &:hover {
    background: rgba(255, 0, 0, 0.8);
    border-color: #ff0000;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
    min-width: 44px;
    min-height: 44px;
  }
  
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 1.1rem;
    min-width: 48px;
    min-height: 48px;
  }
`;

const CarouselArrowLeft = styled(CarouselArrow)`
  left: 20px;
  
  @media (max-width: 768px) {
    left: 10px;
  }
  
  @media (max-width: 480px) {
    left: 8px;
  }
`;

const CarouselArrowRight = styled(CarouselArrow)`
  right: 20px;
  
  @media (max-width: 768px) {
    right: 10px;
  }
  
  @media (max-width: 480px) {
    right: 8px;
  }
`;

const CarouselDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#ff0000' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 24px;
  min-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => props.active ? '#ff0000' : 'rgba(255, 255, 255, 0.8)'};
  }
  
  @media (max-width: 768px) {
    width: 7px;
    height: 7px;
    min-width: 20px;
    min-height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 6px;
    height: 6px;
    min-width: 18px;
    min-height: 18px;
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
  
  @media (max-width: 768px) {
    bottom: 60px;
    width: 95%;
  }
  
  @media (max-width: 480px) {
    bottom: 50px;
    width: 98%;
  }
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
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    margin-bottom: 0.6rem;
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
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 0.75rem;
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
  min-height: 44px;
  min-width: 44px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    min-height: 44px;
    min-width: 44px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
    min-height: 48px;
    min-width: 48px;
  }
`;

const CarouselSocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const CarouselSocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.4rem;
    min-width: 44px;
    min-height: 44px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.375rem;
    min-width: 48px;
    min-height: 48px;
  }
`;

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

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

  // Touch gesture handling
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
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
    <CarouselContainer 
      ref={carouselRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
          aria-label={`Smoking Snakes band photo ${currentIndex + 1}`}
        />
      </AnimatePresence>
      
      <CarouselOverlay />
      
      <CarouselArrowLeft onClick={handlePrevious} aria-label="Previous image">
        <FaChevronLeft />
      </CarouselArrowLeft>
      
      <CarouselArrowRight onClick={handleNext} aria-label="Next image">
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
          <CarouselSocialIcon href="https://facebook.com/smokingsnakesofsweden" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://open.spotify.com/artist/4QanEE5Wrkq1JhWMpWKz4f?si=tYmQ49OiQT-KxGhyFoTEmA" target="_blank" aria-label="Spotify">
            <FaSpotify />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://music.apple.com/us/artist/smoking-snakes/1618982403" target="_blank" aria-label="Apple Music">
            <FaApple />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://youtube.com/@smokingsnakesofsweden" target="_blank" aria-label="YouTube">
            <FaYoutube />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://instagram.com/smokingsnakesofsweden" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://tiktok.com/@smokingsnakesofsweden" target="_blank" aria-label="TikTok">
            <FaTiktok />
          </CarouselSocialIcon>
          <CarouselSocialIcon href="https://www.patreon.com/SmokingSnakes" target="_blank" aria-label="Patreon">
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
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default ImageCarousel;
