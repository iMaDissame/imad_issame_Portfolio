import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import myImg from "../../Assets/Portrait.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub,  AiFillFacebook , AiFillInstagram } from "react-icons/ai";
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

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
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
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/imad.top.16"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/imad-issame-35a3702a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
