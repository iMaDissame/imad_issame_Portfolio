import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  AiFillGithub,AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logoImg from "../Assets/logogo1.png"; 
function Footer() {
  const { t } = useTranslation(); // Hook to get the translation function
  let date = new Date();
  let year = date.getFullYear();
  //gggggggggggg

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{t('footer.designer')}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3><img 
              src={logoImg} 
              alt="Logo" 
              style={{ width: '50px', height: '20px' }} // You can adjust the size as needed
            />                &nbsp;</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
            <a
                  href="https://github.com/iMaDissame"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.facebook.com/imad.top.16"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook />
                </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/imad-issame-35a3702a6/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/i_m_imad/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
