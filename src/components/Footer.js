import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMusic, FaFacebook, FaTiktok, FaInstagram, FaYoutube, FaSpotify, FaApple, FaHeart } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 0, 0, 0.3);
  padding: 3rem 2rem 2rem;
  position: relative;
  z-index: 1000;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  color: #ff0000;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;



const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff0000;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff0000;
    transform: translateX(5px);
  }
`;



const NewsletterSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const NewsletterTitle = styled.h4`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  
  &::placeholder {
    color: #cccccc;
  }
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const NewsletterButton = styled.button`
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #ffffff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const NewsletterMessage = styled.div`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  
  ${props => props.children && props.children.includes('Thank you') 
    ? `
      background: rgba(0, 255, 0, 0.1);
      color: #00ff00;
      border: 1px solid rgba(0, 255, 0, 0.3);
    `
    : `
      background: rgba(255, 0, 0, 0.1);
      color: #ff6666;
      border: 1px solid rgba(255, 0, 0, 0.3);
    `
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: #cccccc;
  margin-bottom: 1rem;
`;

const MadeWithLove = styled.p`
  color: #ff0000;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscriptionMessage('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_o0ohszi', // Your EmailJS service ID
        'template_c38ldnn', // Your EmailJS template ID
        {
          from_email: email,
          subject: 'Newsletter Subscription - Smoking Snakes',
          message: `New newsletter subscription from: ${email}`,
          to_email: 'smokingsnakesofsweden@gmail.com'
        },
        'rLVO5BE9VAQhDdDtl' // Your EmailJS public key
      );
      
      console.log('Newsletter subscription email sent successfully:', result);
      setEmail('');
      setSubscriptionMessage('Thank you for subscribing! Welcome to the Smoking Snakes family! 🎸');
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      setSubscriptionMessage('Sorry, there was an error. Please try again or contact us directly.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>



        </FooterTop>

        <NewsletterSection>
          <NewsletterTitle>Stay Updated</NewsletterTitle>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton type="submit" disabled={isSubscribing}>
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </NewsletterButton>
          </NewsletterForm>
          {subscriptionMessage && (
            <NewsletterMessage>
              {subscriptionMessage}
            </NewsletterMessage>
          )}
        </NewsletterSection>

        <FooterBottom>
          <Copyright>
            © 2024 Smoking Snakes. All rights reserved. | Privacy Policy | Terms of Service
          </Copyright>
          <MadeWithLove>
            Made with <FaHeart /> for music lovers everywhere
          </MadeWithLove>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
