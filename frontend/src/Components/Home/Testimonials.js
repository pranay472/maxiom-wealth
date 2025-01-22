import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background: #F5F5F5;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #113262;
  font-size: 4.5rem;
  margin-bottom: 6rem;
  font-weight: 800;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;
  
  span {
    position: relative;
    display: inline-block;
    padding: 0 30px;
    
    &::before {
      content: '';
      position: absolute;
      left: -20px;
      top: -20px;
      width: 50px;
      height: 50px;
      border-left: 5px solid #113262;
      border-top: 5px solid #113262;
    }
    
    &::after {
      content: '';
      position: absolute;
      right: -20px;
      bottom: -20px;
      width: 50px;
      height: 50px;
      border-right: 5px solid #113262;
      border-bottom: 5px solid #113262;
    }
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 5rem;
    letter-spacing: 2px;
    
    span {
      padding: 0 25px;
      
      &::before, &::after {
        width: 40px;
        height: 40px;
        border-width: 4px;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
    letter-spacing: 2px;
    
    span {
      padding: 0 15px;
      
      &::before, &::after {
        width: 30px;
        height: 30px;
        border-width: 3px;
      }
    }
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;

  .slick-track {
    display: flex !important;
    gap: 1.5rem;
    padding: 2rem 0;
  }

  .slick-slide {
    height: inherit !important;
    > div {
      height: 100%;
    }
  }
`;

const TestimonialCard = styled.div`
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoThumbnail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.thumbnail});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-color: rgba(28, 82, 160, 0.9);
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  svg {
    color: white;
    font-size: 28px;
    margin-left: 4px;
  }
`;

const TestimonialText = styled.p`
  color: #262626;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  position: relative;
  padding-left: 1.5rem;
  font-style: italic;

  &::before {
    content: '"';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 2.5rem;
    color: #F49611;
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const ClientInfo = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
  margin-top: auto;
`;

const ClientName = styled.h4`
  color: #113262;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.25rem;
`;

const ClientDesignation = styled.p`
  color: #8A8A8A;
  font-size: 0.95rem;
  margin: 0;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  ${props => props.direction === 'prev' ? 'left: -24px;' : 'right: -24px;'}

  svg {
    color: #113262;
    font-size: 24px;
  }

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    ${props => props.direction === 'prev' ? 'left: -20px;' : 'right: -20px;'}
    
    svg {
      font-size: 20px;
    }
  }
`;

const PrevArrow = (props) => (
  <ArrowButton direction="prev" onClick={props.onClick}>
    <IoIosArrowBack />
  </ArrowButton>
);

const NextArrow = (props) => (
  <ArrowButton direction="next" onClick={props.onClick}>
    <IoIosArrowForward />
  </ArrowButton>
);

const testimonials = [
  {
    id: 1,
    video: "https://player.vimeo.com/video/380443962",
    thumbnail: "https://vumbnail.com/380443962.jpg",
    text: "I found Maxiom Wealth Equity Investment Advisory very Fascinating because of the value it is delivering, Maxiom Wealth is helping me to beat the markets and get more returns",
    name: "Mr. Hirilal Neelakantan",
    designation: "Business Leader"
  },
  {
    id: 2,
    video: "https://player.vimeo.com/video/458848054",
    thumbnail: "https://vumbnail.com/458848054.jpg",
    text: "I have been very impressed with Maxiom Wealth Performance, Rebalancing, The Diligence in picking up the stocks and identifying the right bias is very critical and also I Love the model where there are no Exit-Loads it gives you the flexibility to draw the money at any point in time.",
    name: "Mr. Ramesh Menon",
    designation: "SVP & CFO - Asia, Synchrony"
  },
  {
    id: 3,
    video: "https://player.vimeo.com/video/481054728",
    thumbnail: "https://vumbnail.com/481054728.jpg",
    text: "You should not be working for money, money should work for you. I trust Maxiom Wealth because it is giving me good returns, service, personal attention. I am very satisfied and happy with Maxiom Wealth Equity Model.",
    name: "Mr. Suman Sasmal",
    designation: "Ambassador, Coach, Consultant OpenExO"
  },
  {
    id: 4,
    video: "https://player.vimeo.com/video/381501489",
    thumbnail: "https://vumbnail.com/381501489.jpg",
    text: "I was impressed with the Maxiom Wealth product mainly because of No Hidden-cost, No Entry or Exit Loads, Not taking custody of my money or stocks. I feel this very Transparent and simple model. I am happy with my returns, I recommend this to any investor who are planning to invest their funds in Long-Term Growth",
    name: "Mr. Nageswera Rao Vasireddy",
    designation: "Sales Leader, Pharma Industry"
  }
];

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    arrows: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
          speed: 600
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: true,
          speed: 400
        }
      }
    ]
  };

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  return (
    <TestimonialsSection>
      <Container>
        <SectionTitle>
          <span>What Our Clients Say</span>
        </SectionTitle>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <VideoContainer>
                {activeVideo === testimonial.id ? (
                  <iframe
                    title="vimeo-player"
                    src={`${testimonial.video}?h=5e459251cd&autoplay=1&title=0&byline=0&portrait=0`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <VideoThumbnail thumbnail={testimonial.thumbnail}>
                    <PlayButton onClick={() => handlePlayVideo(testimonial.id)}>
                      <FaPlay />
                    </PlayButton>
                  </VideoThumbnail>
                )}
              </VideoContainer>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <ClientInfo>
                <ClientName>{testimonial.name}</ClientName>
                <ClientDesignation>{testimonial.designation}</ClientDesignation>
              </ClientInfo>
            </TestimonialCard>
          ))}
        </Slider>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
