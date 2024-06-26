import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['hero11.webp', 'hero12.webp'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container>
      <BackgroundImage style={{ backgroundImage: `url(${images[currentImage]})` }} />
      <Overlay />
      <Content>
        <Logo src="/logo.png" alt="Logo" />
        <Title>Intermoney</Title>
        <Paragraph>Elige el país donde te encuentras</Paragraph>
        <ButtonContainer>
          <CTAButton onClick={() => navigate('/peru')}>
            <Icon src="/peru.png" alt="Peru" />
            PERU
          </CTAButton>
          <CTAButton onClick={() => navigate('/colombia')}>
            <Icon src="/colombia.webp" alt="Colombia" />
            COLOMBIA
          </CTAButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.829);
`;

const Content = styled.div`
  position: relative;
  color: white;
  text-align: center;
  padding: 20px;
  z-index: 1;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 10px 0;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const CTAButton = styled.button`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: #000;
  padding: 15px 30px;
  border: 3px solid #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  animation: vibrate 5s infinite;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #333;
    border-color: #fff;
    box-shadow: 0 4px 20px rgba(51, 51, 51, 0.7);
  }

  @keyframes vibrate {
    0%, 100% {
      transform: translateX(0);
    }
    20%, 60% {
      transform: translateX(-2px);
    }
    40%, 80% {
      transform: translateX(2px);
    }
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
