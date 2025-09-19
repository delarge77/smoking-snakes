import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaDownload, FaMusic, FaCalendarAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const DiscographyContainer = styled.div`
  min-height: 100vh;
  padding: 0;
  max-width: 100%;
  margin: 0;
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
  
  @media (max-width: 480px) {
    background-size: cover;
    background-position: center center;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 4rem;
  text-align: center;
  margin: 0;
  padding: 4rem 2rem 2rem 2rem;
  color: #fff;
  font-family: 'Arial Black', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 3rem 1rem 1.5rem 1rem;
  }
`;

const AlbumGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    gap: 0;
    max-width: 100%;
  }
`;

const AlbumCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  border: none;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 400px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const AlbumCover = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #000, #333);
  border-radius: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('${props => props.coverImage}') center/cover;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const AlbumContent = styled.div`
  flex: 1;
  padding: 3rem;
  text-align: left;
  max-width: 600px;
  
  @media (max-width: 768px) {
    padding: 2rem;
    text-align: center;
    max-width: 100%;
  }
`;

const AlbumTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  font-family: 'Arial Black', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const AlbumYear = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff0000;
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-family: 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const AlbumReleaseDate = styled.div`
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-family: Arial, sans-serif;
  font-style: italic;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AlbumDescription = styled.div`
  color: #ccc;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-family: Arial, sans-serif;
  text-align: left;
  max-width: 600px;
  
  @media (max-width: 768px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const AlbumInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  color: #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  font-weight: 600;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TrackList = styled.div`
  margin-bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const TrackItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  color: #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const TrackNumber = styled.span`
  color: #ff0000;
  font-weight: 700;
  min-width: 30px;
  font-size: 1rem;
`;

const TrackTitle = styled.span`
  flex: 1;
  margin-left: 1rem;
  font-weight: 400;
`;

const TrackDuration = styled.span`
  color: #888;
  font-size: 0.9rem;
  font-weight: 400;
`;

const AlbumActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ActionButton = styled.button`
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #ffffff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }
  
  &.secondary {
    background: transparent;
    border: 1px solid #ff0000;
    color: #ff0000;
    
    &:hover {
      background: #ff0000;
      color: #ffffff;
    }
  }
`;

const ReviewsSection = styled.section`
  padding: 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.25rem 1rem;
  }
`;

const ReviewsTitle = styled(motion.h2)`
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

const Discography = () => {
  const albums = [
    {
      id: 1,
      title: "Restless & Wild",
      year: "2023",
      type: "Debut EP",
      trackCount: 3,
      duration: "10:22",
      coverImage: "/Smoking-Snakes-album-cover-e1694888679277.webp",
      releaseDate: "February 27, 2023",
      description: "Restless & Wild is a debut, self-released EP by the Swedish sleaze metal band Smoking Snakes, released in early 2023. The three-song EP features tracks like 'Excited,' 'There Is No Tomorrow,' and 'Run For Your Life'. The EP was later followed by their official full-length debut album, 'Danger Zone,' which was released in February 2024 after the band signed with Frontiers Music.",
      trackList: [
        { number: 1, title: "Excited", duration: "3:37" },
        { number: 2, title: "There Is No Tomorrow", duration: "3:12" },
        { number: 3, title: "Run For Your Life", duration: "3:33" }
      ]
    },
    {
      id: 2,
      title: "Danger Zone",
      year: "2024",
      type: "Full-Length Album",
      trackCount: 12,
      duration: "38:37",
      coverImage: "/danger-zone-album-cover.jpg",
      releaseDate: "February 2024",
      description: "Official full-length debut album released after signing with Frontiers Music.",
      trackList: [
        { number: 1, title: "Angels Calling", duration: "3:18" },
        { number: 2, title: "Sole Survivors", duration: "3:23" },
        { number: 3, title: "Run For Your Life", duration: "3:32" },
        { number: 4, title: "Lady Luck", duration: "4:08" },
        { number: 5, title: "Excited", duration: "3:37" },
        { number: 6, title: "Restless And Wild", duration: "3:21" },
        { number: 7, title: "Sorrow, Death And Pain", duration: "3:20" },
        { number: 8, title: "There Is No Tomorrow", duration: "3:13" },
        { number: 9, title: "Who Am I", duration: "3:39" },
        { number: 10, title: "We Are Alive", duration: "3:36" },
        { number: 11, title: "Rocking To The Morning Light", duration: "2:46" },
        { number: 12, title: "Lady Luck (Acoustic) - Japanese bonus track", duration: "2:44" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Discography | Smoking Snakes - Sleaze Metal from Gothenburg - Sweden</title>
        <meta name="description" content="Explore Smoking Snakes' discography including EPs, singles, and albums. Listen to our latest sleaze metal releases from Gothenburg, Sweden." />
      </Helmet>
      <DiscographyContainer>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discography
        </PageTitle>

        <AlbumGrid>
          {albums.map((album, index) => (
            <React.Fragment key={album.id}>
              <AlbumCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <AlbumCover coverImage={album.coverImage}>
                  <FaMusic size={48} color="#ff0000" />
                </AlbumCover>
                
                <AlbumContent>
                  <AlbumTitle>{album.title}</AlbumTitle>
                  
                  <AlbumYear>
                    <FaCalendarAlt />
                    {album.year}
                  </AlbumYear>
                  
                  <AlbumReleaseDate>
                    Released: {album.releaseDate}
                  </AlbumReleaseDate>
                  
                  <AlbumInfo>
                    <span>{album.type}</span>
                    <span>{album.trackCount} track{album.trackCount !== 1 ? 's' : ''}</span>
                    <span>{album.duration}</span>
                  </AlbumInfo>
                  
                  <AlbumDescription>
                    {album.description}
                  </AlbumDescription>
                  
                  <TrackList>
                    {album.trackList.map((track) => (
                      <TrackItem key={track.number}>
                        <TrackNumber>{track.number}.</TrackNumber>
                        <TrackTitle>{track.title}</TrackTitle>
                        <TrackDuration>{track.duration}</TrackDuration>
                      </TrackItem>
                    ))}
                  </TrackList>
                </AlbumContent>
              </AlbumCard>
              
              {/* Show reviews after Restless & Wild (first album) */}
              {album.id === 1 && (
                <ReviewsSection>
                  <ReviewsTitle
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Reviews
                  </ReviewsTitle>
                  
                  <FeaturedGrid>
                    <FeaturedCard
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CardIcon>
                        <img src="/sleaze-roxx-logo.png" alt="Sleaze Roxx" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </CardIcon>
                      <CardTitle>Sleaze Roxx - Promising Start</CardTitle>
                      <CardDescription>
                        "Therefore I decided to dig into the vast offerings of Bandcamp in the hope to strike gold. And ladies and gentlemen, I did. Remember this moment, because this is where you first read about Smoking Snakes."
                      </CardDescription>
                      <CardLink href="https://sleazeroxx.com/reviews/smoking-snakes-restless-wild-ep/" target="_blank" rel="noopener noreferrer">
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
                        <img src="/rockbloggen.webp" alt="Rockbloggen" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                      </CardIcon>
                      <CardTitle>Rockbloggen - EP Review</CardTitle>
                      <CardDescription>
                        "As the old bands start to retire, these guys are stepping up to take the reins. They're not content with simply imitating the bands that came before them – they're determined to push the boundaries and create something new."
                      </CardDescription>
                      <CardLink href="https://rockbloggen.se/nyheter/smoking-snakes-has-released-debute-ep-restless-wild-on-bandcamp/" target="_blank" rel="noopener noreferrer">
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
                        <img src="/CGCM.jpg" alt="CGCM Rock Radio" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </CardIcon>
                      <CardTitle>CGCM Rock Radio - EP Review</CardTitle>
                      <CardDescription>
                        "Here comes a relatively new band from Gothenburg, Sweden. They formed in 2022 and put a big smile on my face when I hear their music. It was a long time ago I heard a new and upcoming band with this punch and attitude in their songs."
                      </CardDescription>
                      <CardLink href="https://cgcmrockradio.com/smoking-snakes-restless-and-wild-ep-review/" target="_blank" rel="noopener noreferrer">
                        Read Full Review →
                      </CardLink>
                    </FeaturedCard>
                  </FeaturedGrid>
                </ReviewsSection>
              )}
              
              {/* Show reviews after Danger Zone (second album) */}
              {album.id === 2 && (
                <ReviewsSection>
                  <ReviewsTitle
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Reviews
                  </ReviewsTitle>
                  
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
                      <CardLink href="https://metal-temple.com/review/smoking-snakes-danger-zone/" target="_blank" rel="noopener noreferrer">
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
                      <CardLink href="https://www.metalforcesmagazine.com/site/album-review-smoking-snakes-danger-zone/" target="_blank" rel="noopener noreferrer">
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
                      <CardLink href="https://metal-roos.com.au/smoking-snakes-danger-zone-album-review/" target="_blank" rel="noopener noreferrer">
                        Read Full Review →
                      </CardLink>
                    </FeaturedCard>
                  </FeaturedGrid>
                </ReviewsSection>
              )}
            </React.Fragment>
          ))}
        </AlbumGrid>
      </DiscographyContainer>
    </>
  );
};

export default Discography;
