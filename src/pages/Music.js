import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaSpotify, FaApple, FaYoutube, FaHeart, FaShare } from 'react-icons/fa';

const MusicContainer = styled.div`
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
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const AlbumCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
  }
`;

const AlbumCover = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(45deg, #ff0000, #cc0000);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  
  ${AlbumCover}:hover & {
    opacity: 1;
  }
  
  &:hover {
    background: #64ffda;
    color: #000000;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const AlbumInfo = styled.div`
  text-align: center;
`;

const AlbumTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const AlbumYear = styled.p`
  color: #64ffda;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const AlbumDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const StreamingLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StreamingButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-decoration: none;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 0, 0, 0.2);
    color: #ff0000;
    transform: translateY(-2px);
  }
`;

const SongsSection = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ff0000;
`;

const SongList = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SongItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
  }
`;

const SongNumber = styled.span`
  color: #ff0000;
  font-weight: 600;
  margin-right: 1rem;
  min-width: 30px;
`;

const SongTitle = styled.span`
  color: #ffffff;
  font-weight: 500;
  flex: 1;
`;

const SongDuration = styled.span`
  color: #cccccc;
  margin-right: 1rem;
`;

const SongActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #cccccc;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff0000;
    background: rgba(255, 0, 0, 0.1);
  }
`;

const Music = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const albums = [
    {
      id: 1,
      title: "Midnight Dreams",
      year: "2024",
      description: "Our latest album featuring powerful riffs and soulful melodies that take you on an emotional journey.",
      cover: "🎵",
      songs: [
        { id: 1, title: "Midnight Dreams", duration: "4:32" },
        { id: 2, title: "Electric Storm", duration: "3:45" },
        { id: 3, title: "Lost in the City", duration: "5:18" },
        { id: 4, title: "Fire and Ice", duration: "4:56" },
        { id: 5, title: "Eternal Flame", duration: "6:12" }
      ]
    },
    {
      id: 2,
      title: "Rebel Heart",
      year: "2022",
      description: "A collection of anthems that capture the spirit of rebellion and the power of rock music.",
      cover: "🎸",
      songs: [
        { id: 6, title: "Rebel Heart", duration: "4:15" },
        { id: 7, title: "Thunder Road", duration: "3:58" },
        { id: 8, title: "Wild Spirit", duration: "4:42" },
        { id: 9, title: "Breaking Chains", duration: "5:05" },
        { id: 10, title: "Freedom Call", duration: "4:28" }
      ]
    },
    {
      id: 3,
      title: "First Light",
      year: "2020",
      description: "Our debut album that introduced the world to our unique sound and musical vision.",
      cover: "🌟",
      songs: [
        { id: 11, title: "First Light", duration: "4:08" },
        { id: 12, title: "New Beginning", duration: "3:52" },
        { id: 13, title: "Rising Sun", duration: "4:35" },
        { id: 14, title: "Dawn of Tomorrow", duration: "5:20" },
        { id: 15, title: "Endless Horizon", duration: "4:45" }
      ]
    }
  ];

  const handlePlayPause = (songId) => {
    if (currentSong === songId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(songId);
      setIsPlaying(true);
    }
  };

  return (
    <MusicContainer>
      <PageTitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Music
      </PageTitle>

      <AlbumGrid>
        {albums.map((album, index) => (
          <AlbumCard
            key={album.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <AlbumCover>
              {album.cover}
              <PlayButton onClick={() => handlePlayPause(album.songs[0].id)}>
                {isPlaying && currentSong === album.songs[0].id ? <FaPause /> : <FaPlay />}
              </PlayButton>
            </AlbumCover>
            <AlbumInfo>
              <AlbumTitle>{album.title}</AlbumTitle>
              <AlbumYear>{album.year}</AlbumYear>
              <AlbumDescription>{album.description}</AlbumDescription>
              <StreamingLinks>
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
              </StreamingLinks>
            </AlbumInfo>
          </AlbumCard>
        ))}
      </AlbumGrid>

      <SongsSection>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          All Songs
        </SectionTitle>
        <SongList>
          {albums.flatMap(album => album.songs).map((song, index) => (
            <SongItem
              key={song.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <SongNumber>{String(index + 1).padStart(2, '0')}</SongNumber>
              <SongTitle>{song.title}</SongTitle>
              <SongDuration>{song.duration}</SongDuration>
              <SongActions>
                <ActionButton onClick={() => handlePlayPause(song.id)}>
                  {isPlaying && currentSong === song.id ? <FaPause /> : <FaPlay />}
                </ActionButton>
                <ActionButton>
                  <FaHeart />
                </ActionButton>
                <ActionButton>
                  <FaShare />
                </ActionButton>
              </SongActions>
            </SongItem>
          ))}
        </SongList>
      </SongsSection>
    </MusicContainer>
  );
};

export default Music;
