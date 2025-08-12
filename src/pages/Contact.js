import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTiktok, FaInstagram, FaYoutube, FaSpotify, FaApple, FaPaperPlane, FaUser, FaComments, FaCalendar, FaPatreon } from 'react-icons/fa';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ff0000;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactFormSection = styled.section`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-align: center;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
`;

const FormInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #cccccc;
  }
  
  &:focus {
    outline: none;
    border-color: #ff0000;
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #cccccc;
  }
  
  &:focus {
    outline: none;
    border-color: #ff0000;
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }
  
  &:disabled {
    background: #666666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ContactInfoSection = styled.section`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-align: center;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 0, 0, 0.1);
    transform: translateX(5px);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0000, #cc0000);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  color: #ff0000;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;

const InfoValue = styled.div`
  color: #ffffff;
  font-size: 1rem;
`;

const SocialMediaSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ff0000;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const SocialCard = styled(motion.a)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
  }
`;

const SocialIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SocialName = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const SocialHandle = styled.p`
  color: #cccccc;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  display: block;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_o0ohszi', // Replace with your EmailJS service ID
        'template_c38ldnn', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'smokingsnakesofsweden@gmail.com'
        },
        'rLVO5BE9VAQhDdDtl' // Replace with your EmailJS public key
      );
      
      console.log('Email sent successfully:', result);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! We\'ll get back to you soon.');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialMedia = [
    { name: 'Facebook', handle: '@smokingsnakesofsweden', icon: <FaFacebook />, color: '#1877f2', url: 'https://facebook.com/smokingsnakesofsweden' },
    { name: 'TikTok', handle: '@smokingsnakesofsweden', icon: <FaTiktok />, color: '#ffffff', url: 'https://tiktok.com/@smokingsnakesofsweden' },
    { name: 'Instagram', handle: '@smokingsnakesofsweden', icon: <FaInstagram />, color: '#e4405f', url: 'https://instagram.com/smokingsnakesofsweden' },
    { name: 'YouTube', handle: '@smokingsnakesofsweden', icon: <FaYoutube />, color: '#ff0000', url: 'https://youtube.com/@smokingsnakesofsweden' },
    { name: 'Spotify', handle: 'Smoking Snakes', icon: <FaSpotify />, color: '#1db954', url: 'https://open.spotify.com/artist/4QanEE5Wrkq1JhWMpWKz4f?si=tYmQ49OiQT-KxGhyFoTEmA' },
    { name: 'Apple Music', handle: 'Smoking Snakes', icon: <FaApple />, color: '#fa243c', url: 'https://music.apple.com/us/artist/smoking-snakes/1618982403' },
    { name: 'Patreon', handle: 'Smoking Snakes', icon: <FaPatreon />, color: '#f96854', url: 'https://patreon.com/smokingsnakesofsweden' }
  ];



  return (
    <ContactContainer>
      <PageTitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </PageTitle>

      <ContactGrid>
        <ContactFormSection>
          <FormTitle>Send Us a Message</FormTitle>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name *</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email *</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject *</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us what's on your mind..."
                required
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <FaComments />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </SubmitButton>
          </ContactForm>
        </ContactFormSection>

        <ContactInfoSection>
          <InfoTitle>Get in Touch</InfoTitle>
          <ContactInfoList>
            <ContactInfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>smokingsnakesofsweden@gmail.com</InfoValue>
              </InfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Management</InfoLabel>
                <InfoValue>Tripple Moose Management<br />tripplemoosemanagement@gmail.com</InfoValue>
              </InfoContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <InfoIcon>
                <FaCalendar />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Bookings</InfoLabel>
                <InfoValue>
                  <strong>Bookings:</strong><br />
                  <div style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                    <strong>Sweden:</strong> jelencovich@me.com<br />
                    <strong>Germany:</strong> anita@be-alive.eu<br />
                    <a href="https://be-alive.eu" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0000', textDecoration: 'none' }}>be-alive.eu</a>
                  </div>
                </InfoValue>
              </InfoContent>
            </ContactInfoItem>
          </ContactInfoList>
          

        </ContactInfoSection>
      </ContactGrid>

      <SocialMediaSection>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Follow Us
        </SectionTitle>
        <SocialGrid>
          {socialMedia.map((social, index) => (
            <SocialCard
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SocialIcon style={{ color: social.color }}>
                {social.icon}
              </SocialIcon>
              <SocialName>{social.name}</SocialName>
              <SocialHandle>{social.handle}</SocialHandle>
            </SocialCard>
          ))}
        </SocialGrid>
      </SocialMediaSection>


    </ContactContainer>
  );
};

export default Contact;
