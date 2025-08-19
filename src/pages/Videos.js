import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaYoutube, FaCalendar, FaEye, FaHeart } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const VideosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #ff0000;
  text-align: center;
  margin-bottom: 4rem;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  color: #cccccc;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
  border-radius: 15px;
  border: 1px solid rgba(255, 0, 0, 0.2);
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const HeroDescription = styled.p`
  color: #cccccc;
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const VideoCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
    box-shadow: 0 10px 25px rgba(255, 0, 0, 0.3);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #1a0000 0%, #2d0000 100%);
  border-radius: 10px;
  overflow: hidden;
`;

const YouTubeEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
`;

const VideoInfo = styled.div`
  padding: 1.5rem;
`;

const VideoTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const VideoDescription = styled.p`
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const VideoMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888888;
  font-size: 0.9rem;
`;

const VideoStats = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;



const ChannelSection = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
  border-radius: 15px;
  border: 1px solid rgba(255, 0, 0, 0.2);
`;

const ChannelButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: #ff0000;
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #cc0000;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 0, 0, 0.4);
  }
`;

const VideoHeroSection = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 3rem;
  border-radius: 0;
  overflow: hidden;
  border: none;
  box-shadow: none;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const HeroVideo = styled.video`
  width: 100vw;
  height: auto;
  display: block;
  background: #000000;
  object-fit: cover;
`;

const Videos = () => {
  const [videos] = useState([
    {
      id: 1,
      videoId: "x5H0ZrR5daw"
    },
    {
      id: 2,
      videoId: "5dAjnV8WSVc"
    },
    {
      id: 3,
      videoId: "O6Nh0R_aIcY"
    },
    {
      id: 4,
      videoId: "-s8FbSgeFVs"
    },
    {
      id: 5,
      videoId: "Bmhvuo-279A"
    },
    {
      id: 6,
      videoId: "LIB2z2V-vNo"
    },
    {
      id: 7,
      videoId: "6iNJMzh1rjY"
    }
  ]);



  return (
    <>
      <Helmet>
        <title>Videos | Smoking Snakes - Sleaze Metal from Gothenburg - Sweden</title>
        <meta name="description" content="Watch Smoking Snakes videos – Music videos, live performances, and behind-the-scenes content from our Gothenburg sleaze metal band." />
      </Helmet>
      <VideosContainer>
        <PageTitle>Videos</PageTitle>

        <VideoHeroSection>
          <HeroVideo 
            autoPlay 
            muted 
            loop 
            playsInline
            controls={false}
          >
            <source src="/sitevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </HeroVideo>
        </VideoHeroSection>

        <VideosGrid>
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <VideoThumbnail>
                <YouTubeEmbed
                  src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoThumbnail>
              
              <VideoInfo>
              </VideoInfo>
            </VideoCard>
          ))}
        </VideosGrid>

        <ChannelSection>
          <ChannelButton 
            href="https://www.youtube.com/@smokingsnakesofsweden" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaYoutube />
            Subscribe to YouTube Channel
          </ChannelButton>
        </ChannelSection>

      </VideosContainer>
    </>
  );
};

export default Videos;
