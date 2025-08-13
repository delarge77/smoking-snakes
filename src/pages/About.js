import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageTitle = styled(motion.h1)`
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
  font-size: 3rem;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
`;

const StorySection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 2rem;
  color: #ffffff;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
`;

const StoryContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  line-height: 1.8;
`;

const StoryParagraph = styled.p`
  color: #cccccc;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const MembersSection = styled.section`
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
`;

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1.5rem;
  }
`;

const MemberCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const MemberAvatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  object-fit: contain;
  object-position: center;
  border: 3px solid #ff0000;
  background: rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`;

const MemberName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
`;

const MemberRole = styled.p`
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.1rem;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
`;

const MemberBio = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MemberInstruments = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const InstrumentTag = styled.span`
  background: rgba(255, 255, 255, 0.9);
  color: #000000;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 1);
  text-shadow: none;
`;

const About = () => {
  const members = [
    {
      name: "Brett Martin",
      role: "Lead vocals, rhythm guitar",
      bio: "",
      instruments: [],
      avatar: "/Brett.jpg"
    },
    {
      name: "Andy Delarge",
      role: "Bass, backing vocals",
      bio: "",
      instruments: [],
      avatar: "/Andy.jpg"
    },
    {
      name: "Mackey Gee",
      role: "Drums, backing vocals",
      bio: "",
      instruments: [],
      avatar: "/Mackey.jpg"
    },
    {
      name: "Rob Raw",
      role: "Lead guitar, backing vocals",
      bio: "",
      instruments: [],
      avatar: "/Rob.jpg"
    }
  ];



  return (
    <AboutContainer>
      <PageTitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
              >
          About
        </PageTitle>

      <HeroSection>
        <HeroDescription>
          Meet the Gothenburg-based sleaze metal band that's turning heads and making waves in the rock scene. Formed in 2022 by Brett Martin (lead vocals, rhythm guitar), Andy Delarge (bass, backing vocals), Mackey Gee (drums), and Rob Raw (lead guitar), they are the next generation of hard-hitting, guitar-driven rock 'n' roll.
          <br /><br />
          Influenced by the big arena rock bands of the 80s like W.A.S.P, RATT, Dokken, and Kiss, their music is a fresh and modern take on classic sleaze metal. From catchy hooks to heavy riffs and powerful vocals, they've got a sound that's all their own.
          <br /><br />
          Even before their album was released, and with only a few singles out, the band became the most-voted act to perform at the iconic Time To Rock festival — a testament to their growing reputation and passionate fan base.
          <br /><br />
          At the beginning of 2024, their critically acclaimed debut album Danger Zone was released. It was nominated and became a finalist for the Rocknytt Prize for Album of the Year 2024 and Debut Album of the Year by Sweden's largest online newspaper, Rocknytt. Smoking Snakes is currently recording the band's second album.
        </HeroDescription>
      </HeroSection>



      <MembersSection>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lineup:
        </SectionTitle>
        <MembersGrid>
          {members.map((member, index) => (
            <MemberCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MemberAvatar src={member.avatar} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
              <MemberInstruments>
                {member.instruments.map((instrument, i) => (
                  <InstrumentTag key={i}>{instrument}</InstrumentTag>
                ))}
              </MemberInstruments>
            </MemberCard>
          ))}
        </MembersGrid>
      </MembersSection>
    </AboutContainer>
  );
};

export default About;
