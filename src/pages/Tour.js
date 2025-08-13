import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaClock, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';

const TourContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
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



const TourGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1.5rem;
    justify-items: center;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const TourCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
      background: linear-gradient(45deg, #ff0000, #cc0000);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
  }
`;

const TourDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ff0000;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TourTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const TourLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cccccc;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const TourDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cccccc;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

const TicketButton = styled.button`
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #ffffff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
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
  
  &:disabled {
    background: #666666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SoldOutBadge = styled.span`
  background: #ff4757;
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const PastToursSection = styled.section`
  margin-top: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #ff0000;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
`;

const PastTourList = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const PastTourItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
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
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const PastTourInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PastTourDate = styled.span`
  color: #ff0000;
  font-weight: 600;
  min-width: 100px;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PastTourTitle = styled.span`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
`;

const PastTourLocation = styled.span`
  color: #cccccc;
`;

const PastTourStatus = styled.span`
  color: #ffffff;
  font-weight: 500;
`;

const TicketPrice = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const Tour = () => {
  const upcomingTours = [
          {
        id: 1,
        date: "September 06, 2025",
        title: "Fortress of Rock 2025",
        location: "Bohus Fästning, Kungälv",
        time: "5:00 PM",
        ticketPrice: "350 kr",
        available: true,
        ticketUrl: "https://app.easyarr.se/arrangemang/FortressofRock2025-live-981.html?fbclid=IwY2xjawMG-f9leHRuA2FlbQIxMQABHnd1gZ8n7maFoinzYUWAWozrJ3dnfURFdrBVownNLBIl-odk-lilHeOabaom_aem_k4Msy9wWpoJG5LChb72HsA"
      },
          {
        id: 2,
        date: "September 27, 2025",
        title: "Café 1851 (Fd Folk å Rock)",
        location: "Club Bonksy,  Malmö",
        time: "8:00 PM",
        ticketPrice: "250 kr",
        available: true,
        ticketUrl: "https://secure.tickster.com/sv/wm92z288nw841k0/products?fbclid=IwY2xjawMG-T5leHRuA2FlbQIxMABicmlkETBxcnZIV0dLUHpnZHQyd0JjAR7EQxXvnrb48MN4bM-XtGodAfzUBrtP5z8-EUSpTtUjMJUGmlMM3jKnvJyyXw_aem_zlsG7KO_s8l-pwFqkxidEw"
      },
          {
        id: 3,
        date: "October 29, 2025",
        title: "Shakedown suzies + Smoking Snakes + LA Cobra + Firebombs",
        location: "Sofiehof Underjord, Jönköping",
        time: "7:00 PM",
        ticketPrice: "250 kr",
        available: true,
        ticketUrl: "https://secure.tickster.com/sv/bwk0d6w1382amg4/products?fbclid=IwY2xjawMG-aFleHRuA2FlbQIxMABicmlkETBxcnZIV0dLUHpnZHQyd0JjAR7EQxXvnrb48MN4bM-XtGodAfzUBrtP5z8-EUSpTtUjMJUGmlMM3jKnvJyyXw_aem_zlsG7KO_s8l-pwFqkxidEw"
      },
          {
        id: 4,
        date: "October 30, 2025",
        title: "L.A. COBRA + SMOKING SNAKES",
        location: "ENCORE, Sundbyberg",
        time: "7:00 PM",
        ticketPrice: "175 kr",
        available: true,
        ticketUrl: "https://secure.tickster.com/sv/ph8u2nvfjfw34me/products?fbclid=IwY2xjawMG9_RleHRuA2FlbQIxMABicmlkETBxcnZIV0dLUHpnZHQyd0JjAR5ZBVECRVz_LNV0irCcF2EXzru3eZOAFjf7cDItPeq5rb1xzyZ2Nvt4-YXHGw_aem_74uSI3FBT1jW5198v0SZ_g"
      }
  ];

  const pastTours = [
    { date: "Feb 1, 2025", title: "Belsepub: Sleaze & Hardrock Night", location: "Gothenburg", status: "Completed" },
    { date: "May 10, 2025", title: "Qvänum Live", location: "Qvänum", status: "Completed" },
    { date: "May 16, 2025", title: "MAYHEM ROCK FESTIVAL 2025", location: "229 - London", status: "Completed" },
    { date: "May 17, 2025", title: "MAYHEM ROCK FESTIVAL 2025", location: "SaltBox Nottingham", status: "Completed" },
    { date: "May 18, 2025", title: "MAYHEM ROCK FESTIVAL 2025", location: "Venue 23 Wakefield", status: "Completed" },
    { date: "Jun 14, 2025", title: "Belsepub: Metal-Rock Night", location: "Gothenburg", status: "Completed" },
    { date: "Jul 26, 2025", title: "Eden Rock Festival", location: "Uppsala", status: "Completed" }
  ];



  return (
    <TourContainer>
      <PageTitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tour Dates
      </PageTitle>



      <TourGrid>
        {upcomingTours.map((tour, index) => (
          <TourCard
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <TourDate>
              <FaCalendarAlt />
              {tour.date}
            </TourDate>
            <TourTitle>{tour.title}</TourTitle>
            <TourLocation>
              <FaMapMarkerAlt />
              {tour.location}
            </TourLocation>
            <TourDetails>
              <DetailItem>
                <FaClock />
                {tour.time}
              </DetailItem>
              <DetailItem>
                <FaUsers />
                {tour.capacity}
              </DetailItem>
            </TourDetails>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <TicketPrice>{tour.ticketPrice}</TicketPrice>
              {tour.available ? (
                tour.ticketUrl ? (
                  <TicketButton as="a" href={tour.ticketUrl} target="_blank" rel="noopener noreferrer">
                    <FaTicketAlt />
                    Get Tickets
                  </TicketButton>
                ) : (
                  <TicketButton>
                    <FaTicketAlt />
                    Get Tickets
                  </TicketButton>
                )
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TicketButton disabled>
                    <FaTicketAlt />
                    Sold Out
                  </TicketButton>
                  <SoldOutBadge>SOLD OUT</SoldOutBadge>
                </div>
              )}
            </div>
          </TourCard>
        ))}
      </TourGrid>

      <PastToursSection>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recent Shows
        </SectionTitle>
        <PastTourList>
          {pastTours.map((tour, index) => (
            <PastTourItem
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <PastTourInfo>
                <PastTourDate>{tour.date}</PastTourDate>
                <PastTourTitle>{tour.title}</PastTourTitle>
                <PastTourLocation>• {tour.location}</PastTourLocation>
              </PastTourInfo>
              <PastTourStatus>{tour.status}</PastTourStatus>
            </PastTourItem>
          ))}
        </PastTourList>
      </PastToursSection>


    </TourContainer>
  );
};

export default Tour;
