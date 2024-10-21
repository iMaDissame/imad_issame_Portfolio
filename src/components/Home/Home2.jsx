import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import myImg1 from "../../Assets/issameimad.jpg";
import myImg2 from "../../Assets/issameimad1.jpg";
import myImg3 from "../../Assets/issameimad2.jpg";
// import myImg4 from "../../Assets/issameimad3.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// List of words to highlight, including both French and English terms
const highlightWords = [
  "Python", "Django", "JavaScript", "React.js", "PHP", "Laravel",
  "HTML", "CSS", "Bootstrap", "Cloud Computing", "Artificial Intelligence",
  "Machine Learning", "Data Analysis", "Web Development", 
  "Développement Web", "Intelligence Artificielle", "Présenter", "Introduce",
  "DevOps", "Cloud Computing", "l'analyse de données"
];

// Function to dynamically replace and highlight matching words using regex
const highlightTechnologies = (text) => {
  const regex = new RegExp(`\\b(${highlightWords.join('|')})\\b`, 'gi');
  return text.split(regex).map((part, index) =>
    highlightWords.includes(part) ? <span key={index} className="purple">{part}</span> : part
  );
};

const highlightWorddd = (text, wordToHighlight) => {
  return text.split(' ').map((word, index) =>
    word === wordToHighlight ? <span key={index} className="purple">{word}</span> : word + ' '
  );
};

function Home2() {
  const { t } = useTranslation();
  const [isFullscreen, setIsFullscreen] = useState(false); // State to track fullscreen mode
  const [fullscreenImg, setFullscreenImg] = useState('');  // State to track which image is fullscreen

  const styles = {
    portfolioImg: {
      width: '100%',
      height: '650px', // Regular height when not fullscreen
      objectFit: 'cover',
      cursor: 'pointer'
    },
    fullscreenOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    },
    fullscreenImg: {
      maxWidth: '90%',
      maxHeight: '90%',
      objectFit: 'cover'
    },
    carouselIndicator: {
      backgroundColor: 'white',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
    },
    imageCarousel: {
      marginTop: '20px',
    }
  };

  // Function to toggle fullscreen mode
  const handleImageClick = (imgSrc) => {
    setIsFullscreen(true);
    setFullscreenImg(imgSrc);  // Set the image to be displayed in fullscreen
  };

  // Function to exit fullscreen mode
  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImg('');
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {isFullscreen && (
          <div style={styles.fullscreenOverlay} onClick={closeFullscreen}>
            <img src={fullscreenImg} alt="Fullscreen" style={styles.fullscreenImg} />
          </div>
        )}
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {highlightWorddd(t('1st.title'), t('common.introduce'))}
            </h1>
            <p className="home-about-body">
              {highlightTechnologies(t('1st.intro'))}
              <br />
              <br />
              {highlightTechnologies(t('1st.skills'))}
              <br />
              <br />
              {highlightTechnologies(t('1st.interests'))}
              <br />
              <br />
              {highlightTechnologies(t('1st.projects'))}
              <br />
              <br />
              {highlightTechnologies(t('1st.hobbies'))}
            </p>
          </Col>
          <Col md={5} className="myAvtar">
            <Carousel
              indicators={true}
              controls={false}
              interval={3000}
              className="image-carousel"
              style={styles.imageCarousel}
              // Custom indicators style for dots
              indicatorClassName="custom-indicators"
            >
              <Carousel.Item>
                <Tilt>
                  <img
                    src={myImg1}
                    className="img-fluid"
                    alt="First slide"
                    style={styles.portfolioImg}
                    onClick={() => handleImageClick(myImg1)} // Pass clicked image to fullscreen
                  />
                </Tilt>
              </Carousel.Item>
              <Carousel.Item>
                <Tilt>
                  <img
                    src={myImg2}
                    className="img-fluid"
                    alt="Second slide"
                    style={styles.portfolioImg}
                    onClick={() => handleImageClick(myImg2)} // Pass clicked image to fullscreen
                  />
                </Tilt>
              </Carousel.Item>
                <Carousel.Item>
                <Tilt>
                  <img
                    src={myImg3}
                    className="img-fluid"
                    alt="Second slide"
                    style={styles.portfolioImg}
                    onClick={() => handleImageClick(myImg3)}
                  />
                </Tilt>
              </Carousel.Item>
              {/* <Carousel.Item>
                <Tilt>
                  <img
                    src={myImg4}
                    className="img-fluid"
                    alt="Second slide"
                    style={styles.portfolioImg}
                    onClick={() => handleImageClick(myImg4)}
                  />
                </Tilt>
              </Carousel.Item> */}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t('1st.findMe')}</h1>
            <p>{t('1st.connect')}</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iMaDissame"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/imad.top.16"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/imad-issame-35a3702a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i_m_imad/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
