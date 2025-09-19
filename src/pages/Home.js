import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaSpotify, FaApple, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import ImageCarousel from '../components/ImageCarousel';

const HomeContainer = styled.div`
  min-height: 100vh;
  
  @media (max-width: 768px) {
    min-height: 50vh;
  }
  
  @media (max-width: 480px) {
    min-height: 40vh;
  }
`;



const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 50vh;
  }
  
  @media (max-width: 480px) {
    min-height: 40vh;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 3;
`;

const HeroTitle = styled(motion.h1)`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

const HeroLogo = styled.img`
  height: 360px;
  width: auto;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    height: 240px;
    max-width: 800px;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #cccccc;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  margin: 0 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    margin: 0.5rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const FeaturedSection = styled.section`
  padding: 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.25rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ff0000;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 1.5px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    letter-spacing: 1px;
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const FeaturedCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #ff0000;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
`;

const CardDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const CardLink = styled.a`
  color: #ff0000;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  display: inline-block;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #cc0000;
    transform: translateX(5px);
  }
  
  @media (max-width: 480px) {
    margin-top: 0.875rem;
    padding: 0.375rem 0;
    min-height: 44px;
  }
`;

const LatestRelease = styled.section`
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const AlbumCover = styled(motion.div)`
  width: 300px;
  height: 300px;
  margin: 0 auto 2rem;
  background: linear-gradient(45deg, #ff0000, #cc0000);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }
`;

const AlbumTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const AlbumDescription = styled.p`
  color: #cccccc;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
    font-size: 0.9rem;
  }
`;

const StreamingButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

const StreamingButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  min-height: 44px;
  min-width: 44px;
  
  &:hover {
    background: rgba(255, 0, 0, 0.2);
    color: #ff0000;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    min-height: 44px;
    min-width: 44px;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.1rem;
    min-height: 48px;
    min-width: 48px;
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
`;

const BuyAlbumSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    margin: 2rem 0;
  }
  
  @media (max-width: 480px) {
    margin: 1.5rem 0;
  }
`;

const BuyAlbumButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #ffffff;
  text-decoration: none;
  padding: 1.2rem 2rem;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
  min-height: 44px;
  min-width: 44px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 0, 0, 0.5);
    background: linear-gradient(45deg, #cc0000, #ff0000);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 1.75rem;
    font-size: 1.1rem;
    min-height: 44px;
    min-width: 44px;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    min-height: 48px;
    min-width: 48px;
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
`;

const FrontiersLogo = styled.img`
  height: 40px;
  width: auto;
  display: block;
  max-width: 120px;
  object-fit: contain;
  
  @media (max-width: 480px) {
    height: 35px;
    max-width: 100px;
  }
`;

const AwardsSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin: 1.5rem 0;
    padding: 1.25rem;
  }
`;

const AwardsText = styled.p`
  color: #ffffff;
  font-size: 1.3rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
`;

const SpotifyPlayer = styled.section`
  padding: 2rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0.5rem 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem;
    margin: 0.25rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    margin: 0.25rem 0.75rem;
  }
`;

const SpotifyPlayerTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ff0000;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SpotifyEmbedContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Smoking Snakes - Official Website | Sleaze Metal from Gothenburg - Sweden</title>
        <meta name="description" content="Official home of Smoking Snakes – Sleaze Metal from Gothenburg, Sweden. Music, merch, tour dates, and news." />

      </Helmet>
      <HomeContainer>
        <HeroSection>
          <ImageCarousel />
        </HeroSection>

        <LatestRelease>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Debut Album
          </SectionTitle>
          <AlbumCover
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundImage: 'url(/danger-zone-album-cover.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            aria-label="Smoking Snakes Danger Zone album cover"
          />
          <AlbumTitle>"Danger Zone"</AlbumTitle>
          <AlbumDescription>
            "Danger Zone," the debut album from Swedish band Smoking Snakes, is a high-energy sleaze metal record that pays homage to 80s hard rock and metal, particularly bands like W.A.S.P., RATT, and Dokken. Reviews praise the album's catchy, anthemic choruses, driving rhythms, and electrifying guitar riffs, noting the band's youthful energy and strong musicianship. Available on all digital platforms.
          </AlbumDescription>
          <StreamingButtons>
            <StreamingButton href="https://open.spotify.com/artist/4QanEE5Wrkq1JhWMpWKz4f?si=tYmQ49OiQT-KxGhyFoTEmA" target="_blank">
              <FaSpotify />
              Spotify
            </StreamingButton>
            <StreamingButton href="https://music.apple.com/us/artist/smoking-snakes/1618982403" target="_blank">
              <FaApple />
              Apple Music
            </StreamingButton>
            <StreamingButton href="https://youtube.com/@smokingsnakesofsweden" target="_blank">
              <FaYoutube />
              YouTube
            </StreamingButton>
          </StreamingButtons>
          
          <BuyAlbumSection>
            <BuyAlbumButton 
              href="https://www.frontiers.it/artist/2192" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FrontiersLogo src="/frontiers.png" alt="Frontiers Records" />
              <span>Buy the Album</span>
            </BuyAlbumButton>
          </BuyAlbumSection>
        </LatestRelease>

        <SpotifyPlayer>
          <SpotifyPlayerTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Spotify
          </SpotifyPlayerTitle>
          <SpotifyEmbedContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/4QanEE5Wrkq1JhWMpWKz4f?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </SpotifyEmbedContainer>
        </SpotifyPlayer>

        <FeaturedSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Reviews
          </SectionTitle>
          <FeaturedGrid>
            <FeaturedCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardIcon>
                <img src="/metal-temple.svg" alt="Metal Temple" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </CardIcon>
              <CardTitle>Metal Temple - 10/10 Masterpiece</CardTitle>
              <CardDescription>
                "Danger Zone" receives a perfect score! Metal Temple praises our high-energy sleaze metal sound, 
                calling it "a sleaze metal masterpiece" with "electrifying" performances.
              </CardDescription>
              <CardLink href="https://metal-temple.com/review/smoking-snakes-danger-zone/" target="_blank">
                Read Full Review →
              </CardLink>
            </FeaturedCard>
            <FeaturedCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardIcon>
                <img src="/meta-forces.jpeg" alt="Metal Forces Magazine" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </CardIcon>
              <CardTitle>Metal Forces Magazine - 8/10</CardTitle>
              <CardDescription>
                "Strong debut full-length of driving heavy rock" with "swaggering metal that attracts the girls, 
                kicks down doors and revs engines." Neil Arnold calls us "my new favourite band."
              </CardDescription>
              <CardLink href="https://www.metalforcesmagazine.com/site/album-review-smoking-snakes-danger-zone/" target="_blank">
                Read Full Review →
              </CardLink>
            </FeaturedCard>
            <FeaturedCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CardIcon>
                <img src="/metal-roos.png" alt="Metal-Roos" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </CardIcon>
              <CardTitle>Metal-Roos - Album of the Year Contender</CardTitle>
              <CardDescription>
                "A breathtaking debut" with "Album Of The Year aura" that "knocks listeners into the next fucking week...and beyond!" 
                Iron Mathew calls it "superb album of highly head-banging and immensely infectious heavy metal."
              </CardDescription>
              <CardLink href="https://metal-roos.com.au/smoking-snakes-danger-zone-album-review/" target="_blank">
                Read Full Review →
              </CardLink>
            </FeaturedCard>

          </FeaturedGrid>
          
          <AwardsSection>
            <AwardsText>
              Danger Zone was double-nominated at Rocknyttpriset 2024 — Album of the Year and Breakthrough of the Year. These nods cemented Smoking Snakes as one of Sweden's fastest-rising rock acts.
            </AwardsText>
          </AwardsSection>
        </FeaturedSection>
      </HomeContainer>
    </>
  );
};

export default Home;
