import React, { useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaClock, FaUsers } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

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
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TourCard = styled(motion.div)`
  background: ${props => props.$backgroundImage 
    ? `url(${props.$backgroundImage})`
    : 'rgba(255, 255, 255, 0.05)'};
  background-size: ${props => props.$backgroundImage ? 'contain' : 'cover'};
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${props => props.$backgroundImage ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);
`;

const TourTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.7);
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5);
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
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 0, 0, 0.5);
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

const TicketPrice = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9), 0 0 12px rgba(0, 0, 0, 0.7);
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

const RecentShowsContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ShowRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const ShowDate = styled.span`
  color: #ff0000;
  font-weight: 600;
  width: 80px;
  flex-shrink: 0;
  font-family: 'Orbitron', 'Arial Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ShowTitle = styled.span`
  color: #ffffff;
  font-weight: 600;
  flex: 1;
  margin: 0 1rem;
  font-family: 'Inter', sans-serif;
`;

const ShowLocation = styled.span`
  color: #cccccc;
  width: 100px;
  flex-shrink: 0;
  margin-right: 1rem;
`;

const ShowStatus = styled.span`
  color: #ffffff;
  font-weight: 500;
  width: 80px;
  text-align: right;
  flex-shrink: 0;
`;

// Helper function to parse date string to Date object
const parseDate = (dateString) => {
  // Handle formats like "October 29, 2025" or "Sep 6, 2025"
  const date = new Date(dateString);
  return date;
};

// Helper function to format date for past tours (e.g., "Oct 29, 2025")
const formatDateForPast = (dateString) => {
  const date = parseDate(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

// Helper function to check if a date has passed
const isDatePassed = (dateString) => {
  const tourDate = parseDate(dateString);
  const today = new Date();
  // Set time to midnight for accurate date comparison
  today.setHours(0, 0, 0, 0);
  tourDate.setHours(0, 0, 0, 0);
  return tourDate < today;
};

// Tour data - defined outside component for better performance
const allTours = [
  {
    id: 1,
    date: "October 29, 2025",
    title: "Shakedown suzies + Smoking Snakes + LA Cobra + Firebombs",
    location: "Sofiehof Underjord, Jönköping",
    time: "7:00 PM",
    ticketPrice: "250 kr",
    available: true,
    ticketUrl: "https://secure.tickster.com/sv/bwk0d6w1382amg4/products?fbclid=IwY2xjawMG-aFleHRuA2FlbQIxMABicmlkETBxcnZIV0dLUHpnZHQyd0JjAR7EQxXvnrb48MN4bM-XtGodAfzUBrtP5z8-EUSpTtUjMJUGmlMM3jKnvJyyXw_aem_zlsG7KO_s8l-pwFqkxidEw"
  },
  {
    id: 2,
    date: "October 30, 2025",
    title: "L.A. COBRA + SMOKING SNAKES",
    location: "ENCORE, Sundbyberg",
    time: "7:00 PM",
    ticketPrice: "175 kr",
    available: true,
    ticketUrl: "https://secure.tickster.com/sv/ph8u2nvfjfw34me/products?fbclid=IwY2xjawMG9_RleHRuA2FlbQIxMABicmlkETBxcnZIV0dLUHpnZHQyd0JjAR5ZBVECRVz_LNV0irCcF2EXzru3eZOAFjf7cDItPeq5rb1xzyZ2Nvt4-YXHGw_aem_74uSI3FBT1jW5198v0SZ_g"
  },
  {
    id: 3,
    date: "March 7, 2026",
    title: "The Black and White Party ( with Bai Bang )",
    location: "Roy Restaurant Café & Bar - Möndal - Göteborg",
    time: "9:00 PM",
    ticketPrice: "125 kr",
    available: true,
    ticketUrl: "https://billetto.se/e/black-white-rock-party-med-smoking-snakes-bai-bang-biljetter-1748562?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1748562&fbclid=IwY2xjawOToTFleHRuA2FlbQIxMABicmlkETA3VGhlUmNjSEh5RlZjdzUxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhleA5kULxbXfzbzVrhv936-sWXB8rJ5OAsa8WjVWA5DqQnbTFRd57YEtf4z_aem_fddFylvVN_Hnt6AH7-azNg",
    backgroundImage: "https://billetto.imgix.net/6uwesmj9lyzsdwpv9w95rx2ckams?w=1440&h=810&fit=crop&auto=compress%2Cformat&rect=0%2C0%2C1920%2C1080&s=fc329518226f2a9673a152d3cae42dbe"
  },
  {
    id: 4,
    date: "May 8, 2026",
    title: "Lock Up Your Daughters Tour - SMOKING SNAKES & SUICIDE BOMBERS",
    location: "MTC Köln, Cologne, Germany",
    time: "7:00 PM",
    ticketPrice: "€30.80",
    available: true,
    ticketUrl: "https://www.reservix.de/tickets-lock-up-your-daughters-tour-smoking-snakes-suicide-bombers-in-koeln-mtc-live-music-club-am-8-5-2026/e2487908",
    backgroundImage: "https://cdn.reservix.com/core/img/event/detailEvent_2487908.jpg"
  },
  {
    id: 5,
    date: "May 9, 2026",
    title: "Lock Up Your Daughters Tour - SMOKING SNAKES & SUICIDE BOMBERS + CRAZY69",
    location: "DVG Club, Kortrijk, Belgium",
    time: "7:00 PM",
    ticketPrice: "€ 20,00",
    available: true,
    ticketUrl: "https://smoking-snakes-kortrijk.eventsquare.store/nl/ueoiq6ospoa7/nwfqcpvppo7d",
    backgroundImage: "https://cdn.reservix.com/core/img/event/detailEvent_2487908.jpg"
  },
  {
    id: 6,
    date: "May 12, 2026",
    title: "Lock Up Your Daughters Tour - SMOKING SNAKES & SUICIDE BOMBERS",
    location: "Privatclub Berlin, Berlin, Germany",
    time: "8:00 PM",
    ticketPrice: "€30.80",
    available: true,
    ticketUrl: "https://www.reservix.de/tickets-lock-up-your-daughters-tour-smoking-snakes-suicide-bombers-in-berlin-privatclub-am-12-5-2026/e2487912",
    backgroundImage: "https://cdn.reservix.com/core/img/event/detailEvent_2487908.jpg"
  },
  {
    id: 7,
    date: "May 13, 2026",
    title: "Lock Up Your Daughters Tour - SMOKING SNAKES & SUICIDE BOMBERS",
    location: "Kulturfabrik Kufstein, Kufstein, Austria",
    time: "8:00 PM",
    ticketPrice: "€30.80",
    available: true,
    ticketUrl: "https://www.reservix.de/tickets-lock-up-your-daughters-tour-smoking-snakes-suicide-bombers-in-kufstein-kufa-am-13-5-2026/e2487917",
    backgroundImage: "https://cdn.reservix.com/core/img/event/detailEvent_2487908.jpg"
  },
  {
    id: 8,
    date: "May 14, 2026",
    title: "Lock Up Your Daughters Tour - SMOKING SNAKES & SUICIDE BOMBERS",
    location: "Rocketclub, Landshut, Germany",
    time: "8:00 PM",
    ticketPrice: "€30.80",
    available: true,
    ticketUrl: "https://www.reservix.de/tickets-lock-up-your-daughters-tour-smoking-snakes-suicide-bombers-in-landshut-rocketclub-am-14-5-2026/e2487919",
    backgroundImage: "https://cdn.reservix.com/core/img/event/detailEvent_2487908.jpg"
  },
  {
    id: 9,
    date: "May 15, 2026",
    title: "Lock Up Your Daughters Tour - SMOKING SNAKES / SUICIDE BOMBERS / CRAZY69",
    location: "BACKSTAGE Kultur- und Veranstaltungszentrum, Munich, Germany",
    time: "8:00 PM",
    ticketPrice: "€30.80",
    available: true,
    ticketUrl: "https://www.reservix.de/tickets-lock-up-your-daughters-tour-smoking-snakes-suicide-bombers-crazy69-in-muenchen-backstage-halle-am-15-5-2026/e2487920",
    backgroundImage: "https://cdn.reservix.com/core/img/event/detailEvent_2487908.jpg"
  },
  {
    id: 10,
    date: "May 16, 2026",
    title: "Mayhem Rock Festival",
    location: "Nottingham, UK",
    time: "1:00 PM",
    ticketPrice: "£77.00",
    available: true,
    ticketUrl: "https://www.gigantic.com/mayhem-rock-festival-tickets",
    backgroundImage: "https://cdn2.gigantic.com/static/images/event/820x500/mayhem_rock_festival_2026_nottingham-7597520827.jpg"
  }
];

const staticPastTours = [
  { date: "Sep 6, 2025", title: "Fortress of Rock 2025", location: "Kungälv", status: "Completed" },
  { date: "Jul 26, 2025", title: "Eden Rock Festival", location: "Uppsala", status: "Completed" },
  { date: "Jun 14, 2025", title: "Belsepub: Metal-Rock Night", location: "Gothenburg", status: "Completed" },
  { date: "May 18, 2025", title: "MAYHEM ROCK FESTIVAL 2025", location: "Wakefield", status: "Completed" },
  { date: "May 17, 2025", title: "MAYHEM ROCK FESTIVAL 2025", location: "Nottingham", status: "Completed" },
  { date: "May 16, 2025", title: "MAYHEM ROCK FESTIVAL 2025", location: "London", status: "Completed" },
  { date: "May 10, 2025", title: "Qvänum Live", location: "Qvänum", status: "Completed" },
  { date: "Feb 1, 2025", title: "Belsepub: Sleaze & Hardrock Night", location: "Gothenburg", status: "Completed" }
];

const Tour = () => {

  // Separate upcoming and past tours based on current date
  const { upcomingTours, pastTours } = useMemo(() => {
    const upcoming = [];
    const past = [];

    // Check each tour date
    allTours.forEach(tour => {
      if (isDatePassed(tour.date)) {
        // Move to past tours with formatted date
        past.push({
          date: formatDateForPast(tour.date),
          title: tour.title,
          location: tour.location,
          status: "Completed"
        });
      } else {
        // Keep in upcoming tours
        upcoming.push(tour);
      }
    });

    // Combine with static past tours and sort by date (newest first)
    const allPastTours = [...past, ...staticPastTours].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA; // Sort descending (newest first)
    });

    return {
      upcomingTours: upcoming,
      pastTours: allPastTours
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Tour | Smoking Snakes - Sleaze Metal from Gothenburg - Sweden</title>
        <meta name="description" content="See Smoking Snakes live on tour! Check upcoming sleaze metal shows, tour dates, and book tickets for our Gothenburg-based rock band." />
      </Helmet>
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
              $backgroundImage={tour.backgroundImage}
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
                  <TicketButton disabled>
                    <FaTicketAlt />
                    Sold Out
                  </TicketButton>
                )}
              </div>
            </TourCard>
          ))}
        </TourGrid>

        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recent Shows
        </SectionTitle>

        <RecentShowsContainer>
          {pastTours.map((tour, index) => (
            <ShowRow key={index}>
              <ShowDate>{tour.date}</ShowDate>
              <ShowTitle>{tour.title}</ShowTitle>
              <ShowLocation>• {tour.location}</ShowLocation>
              <ShowStatus>{tour.status}</ShowStatus>
            </ShowRow>
          ))}
        </RecentShowsContainer>
      </TourContainer>
    </>
  );
};

export default Tour;