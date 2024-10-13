import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import certificate1 from '../../Assets/Laravel-coursera.jpg';
import certificate2 from '../../Assets/Software Engineering Software Design and Project Management.jpg';
import certificate3 from '../../Assets/Developers.jpg';
import certificate4 from '../../Assets/Python-for-Everybody.jpg'; // Python certificate
import certificate5 from '../../Assets/prompt.jpg';
import certificate6 from '../../Assets/Unix-Workbench.jpg'; 
import certificate7 from '../../Assets/AI-Career-Essentials.jpg'; 
import Tilt from "react-parallax-tilt";

function Certificate() {
  const { t } = useTranslation();

  const certificates = [
    
    {
      image: certificate7,
      description: t('certificates.aiCareerEssentialsDescription'),
      link: "https://intranet.alxswe.com/certificates/FyNSpL63Bm" // Add certificate URL
    },
    {
      image: certificate3,
      description: t('certificates.webDevelopmentDescription'),
      link: "https://coursera.org/share/5c2a78867b9147e7daab7ae641743292" // Add certificate URL
    },
    {
      image: certificate4,
      description: t('certificates.pythonDescription'),
      link: "https://coursera.org/share/6b6a1b47340756e3069af6b9912c2313" // Add certificate URL
    },
    {
      image: certificate1,
      description: t('certificates.laravelDescription'),
      link: "https://coursera.org/share/8515ebac04d41a7dcc413f43474b283c" // Add certificate URL
    },
    {
      image: certificate2,
      description: t('certificates.softwareEngineeringDescription'),
      link: "https://coursera.org/share/e2322c9381640b3675cb5bc27170f7bd" // Add certificate URL
    },
    {
      image: certificate5,
      description: t('certificates.promptEngineeringDescription'),
      link: "https://coursera.org/share/f5c6efc0308327c2258a01632ab57afe" // Replace with the actual certificate URL
    },
    {
      image: certificate6,
      description: t('certificates.unixWorkbenchDescription'),
      link: "https://coursera.org/share/ff4bc833f9ef62b5fa346523bf967de6" // Add certificate URL
    },
    
  ];

  return (
    <Container fluid className="certificate-section" id="certificates">
      <Container>
        <Row>
          <Col md={12} className="certificate-heading">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('certificates.title').split(' ').map((word, index) => 
                word === 'Certificats' || word === 'Certificates' ? 
                  <span key={index} className="purple">{word}</span> : word + ' '
              )}
            </h1>
          </Col>
        </Row>

        {certificates.map((cert, index) => (
          <Row key={index} className="certificate-item align-items-center">
            <Col md={4} className={index % 2 === 0 ? "order-md-1" : "order-md-2"}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <Tilt>
                  <img src={cert.image} className="img-fluid" alt={`Certificate ${index + 1}`} />
                </Tilt>
              </a>
            </Col>
            <Col md={8} className={`certificate-description ${index % 2 === 0 ? "order-md-2" : "order-md-1"}`}>
              <p className="certificate-body">{cert.description}</p>
            </Col>
          </Row>
        ))}
      </Container>

      <style jsx>{`
        .certificate-section {
          position: relative;
          padding-top: 150px !important;
          padding-bottom: 30px !important;
          background-image: var(--section-background-color) !important;
          color: white !important;
        }

        .certificate-heading {
          padding-top: 80px !important;
          padding-bottom: 50px !important;
          text-align: center;
        }

        .certificate-item {
          padding-top: 50px !important;
          padding-bottom: 50px !important;
        }

        .certificate-description {
          display: flex;
          align-items: center;
        }

        .certificate-body {
          font-size: 1.2em !important;
          text-align: justify;
        }

        .purple {
          color: var(--imp-text-color) !important;
        }

        @media (max-width: 767px) {
          .certificate-description {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
        }
      `}</style>
    </Container>
  );
}

export default Certificate;
