import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import certificate1 from '../../Assets/Laravel-coursera.jpg';
import certificate2 from '../../Assets/Software Engineering Software Design and Project Management.jpg';
import certificate3 from '../../Assets/Developers.jpg';
import certificate4 from '../../Assets/Advanced_Styling_with_Responsive_Design.jpg';
import certificate5 from '../../Assets/prompt.jpg';
import Tilt from "react-parallax-tilt";

function Certificate() {
  const { t } = useTranslation();

  const certificates = [
    {
      image: certificate1,
      description: t('certificates.laravelDescription'),
    },
    {
      image: certificate2,
      description: t('certificates.softwareEngineeringDescription'),
    },
    {
      image: certificate3,
      description: t('certificates.webDevelopmentDescription'),
    },
    {
      image: certificate4,
      description: t('certificates.advancedStylingDescription'),
    },
    {
      image: certificate5,
      description: t('certificates.promptEngineeringDescription'),
    },
  ];

  return (
    <Container fluid className="certificate-section" id="certificates">
      <Container>
        <Row>
          <Col md={12} className="certificate-heading">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('certificates.title').split(' ').map((word, index) => 
                word === 'CERTIFICATES' ? <span key={index} className="purple">{word}</span> : word + ' '
              )}
            </h1>
          </Col>
        </Row>

        {certificates.map((cert, index) => (
          <Row key={index} className="certificate-item align-items-center">
            <Col md={4} className={index % 2 === 0 ? "order-md-1" : "order-md-2"}>
              <Tilt>
                <img src={cert.image} className="img-fluid" alt={`Certificate ${index + 1}`} />
              </Tilt>
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