import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaTshirt, 
  FaHatCowboy, 
  FaMusic, 
  FaGuitar, 
  FaGem, 
  FaCircle,
  FaExternalLinkAlt
} from 'react-icons/fa';

/*
  BANDCAMP INTEGRATION:
  
  Simple merchandise display with direct links to Bandcamp.
  Users can view merchandise and click to purchase on Bandcamp.
  No cart or checkout functionality - direct redirect to Bandcamp store.
*/

const MerchandiseContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MerchandiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const MerchandiseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
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
`;

const MerchandiseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 2px solid rgba(255, 0, 0, 0.3);
`;

const MerchandiseTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;





const MerchandiseDescription = styled.p`
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;



const AddToCartButton = styled.button`
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 0, 0, 0.3);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: #888888;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const CartIcon = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.8rem;
  box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
  transition: all 0.3s ease;
  z-index: 9999;
  animation: pulse 2s infinite;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 0, 0, 0.6);
    animation: none;
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
    }
    50% {
      box-shadow: 0 8px 25px rgba(255, 0, 0, 0.8);
    }
    100% {
      box-shadow: 0 8px 25px rgba(255, 0, 0, 0.4);
    }
  }
`;

const CartLabel = styled.div`
  position: fixed;
  top: 5.5rem;
  right: 2rem;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  z-index: 9999;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    top: 4.5rem;
    right: 1rem;
    font-size: 0.7rem;
  }
`;



const Merchandise = () => {
  const merchandiseItems = [
    {
      id: 1,
      title: "Danger Zone T-Shirt",
      category: "Shirt",
      price: "€30 EUR",
      priceUSD: 32.50,
      description: "Official Smoking Snakes 'Danger Zone' T-Shirt featuring the album artwork. High-quality cotton with the band's signature design.",
      image: "/tshirt.jpg",
      available: true,
      link: "https://smokingsnakes.bandcamp.com/merch",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      title: "RAWK Guitar Pic Bundle",
      category: "Button/Pin/Patch",
      price: "€6 EUR",
      priceUSD: 6.50,
      description: "Smoking Snakes RAWK guitar pick bundle. Perfect for guitarists and collectors. Multiple picks with the band's logo.",
      image: "/band-photo-1.jpg",
      available: true,
      link: "https://smokingsnakes.bandcamp.com/merch"
    },
    {
      id: 3,
      title: "Military Identification Necklace",
      category: "Other Apparel",
      price: "€20 EUR",
      priceUSD: 21.70,
      description: "Unique Smoking Snakes Military Identification Necklace. A distinctive piece of band merchandise with military-style design.",
      image: "/band-photo-2.jpg",
      available: true,
      link: "https://smokingsnakes.bandcamp.com/merch"
    },
    {
      id: 4,
      title: "Classic Logo Snapback Trucker Cap",
      category: "Hat",
      price: "€25 EUR",
      priceUSD: 27.10,
      description: "Classic Smoking Snakes logo snapback trucker cap. Comfortable fit with embroidered band logo. Perfect for any occasion.",
      image: "/Trucker Cap.jpg",
      available: true,
      link: "https://smokingsnakes.bandcamp.com/merch"
    },
    {
      id: 5,
      title: "Classic Logo Patch – No Frills, Just Filth",
      category: "Other Apparel",
      price: "€8 EUR",
      priceUSD: 8.70,
      description: "🐍 Classic Smoking Snakes logo patch. No frills, just filth. Perfect for jackets, bags, or anywhere you want to show your support.",
      image: "/band-photo-4.jpg",
      available: true,
      link: "https://smokingsnakes.bandcamp.com/merch"
    },
    {
      id: 6,
      title: "Scandinavian Premium Sleaze Metal – Limited Patch Drop!",
      category: "Other Apparel",
      price: "€12 EUR",
      priceUSD: 13.00,
      description: "🔥 Limited edition patch featuring the iconic 'Scandinavian Premium Sleaze Metal' design. High-quality embroidery on premium fabric.",
      image: "/band-photo-3.jpg",
      available: true,
      link: "https://smokingsnakes.bandcamp.com/merch"
    },
    {
      id: 7,
      title: "Danger Zone - Red LP",
      category: "Vinyl",
      price: "€35 EUR",
      priceUSD: 38.00,
      description: "Limited edition red vinyl LP of 'Danger Zone'. Includes digital download and exclusive artwork. Limited to 500 copies worldwide.",
      image: "/danger-zone-album-cover.jpg",
      available: true,
      link: "https://smokingsnakes.bandcamp.com/merch"
    },
    {
      id: 8,
      title: "Classic Logo T-shirt",
      category: "Shirt",
      price: "€28 EUR",
      priceUSD: 30.50,
      description: "Classic Smoking Snakes logo t-shirt. Comfortable fit with the band's signature logo prominently displayed. Available in multiple sizes.",
      image: "/tshirt.jpg",
      available: true,
      link: "https://smokingsnakes.bandcamp.com/merch",
      sizes: ["S", "M", "L", "XL", "XXL"]
    }
  ];

  return (
    <MerchandiseContainer>
      <PageTitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Merchandise
      </PageTitle>

      <MerchandiseGrid>
        {merchandiseItems.map((item, index) => (
          <MerchandiseCard
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <MerchandiseImage
              src={item.image}
              alt={item.title}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '200px', 
              background: 'linear-gradient(135deg, #1a0000 0%, #2d0000 50%, #400000 100%)', 
              borderRadius: '12px', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '3rem', 
              color: '#ff0000' 
            }}>
              {item.category === 'Shirt' ? <FaTshirt /> : 
               item.category === 'Hat' ? <FaHatCowboy /> : 
               item.category === 'Vinyl' ? <FaMusic /> : 
               item.category === 'Button/Pin/Patch' ? <FaGuitar /> : 
               item.category === 'Other Apparel' ? <FaGem /> : <FaCircle />}
            </div>
            
            <MerchandiseTitle>
              {item.title}
            </MerchandiseTitle>
            

            

            
            <MerchandiseDescription>
              {item.description}
            </MerchandiseDescription>
            
            {item.available && (
              <>

                
                <AddToCartButton
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <FaExternalLinkAlt />
                  Buy on Bandcamp
                </AddToCartButton>
                

              </>
            )}
            
            {!item.available && (
              <div style={{
                background: '#666666',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                SOLD OUT
              </div>
            )}
          </MerchandiseCard>
        ))}
      </MerchandiseGrid>
      
      {/* Bandcamp Store Link */}
      <CartIcon onClick={() => window.open('https://smokingsnakes.bandcamp.com/merch', '_blank')}>
        <FaExternalLinkAlt />
      </CartIcon>
      <CartLabel>Bandcamp Store</CartLabel>
    </MerchandiseContainer>
  );
};

export default Merchandise;
