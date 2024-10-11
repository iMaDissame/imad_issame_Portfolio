import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdfFR from "../../Assets/GHAOURI_Zouhair_Resume.pdf"; 
import pdfEN from "../../Assets/GHAOURI_Zouhair_Resume_English_version.pdf"; 
import cvImageFR from "../../Assets/GHAOURI_Zouhair_Resume.png"; 
import cvImageEN from "../../Assets/GHAOURI_Zouhair_Resume_English_version.png"; 
import { useTranslation } from "react-i18next";

function ResumeNew() {
  const { i18n } = useTranslation();
  

  const cvImage = i18n.language === 'fr' ? cvImageFR : cvImageEN;
  const pdf = i18n.language === 'fr' ? pdfFR : pdfEN;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="justify-content-center">
          <Col md={8} className="text-center mb-4">
            <h2>{i18n.t('resumezouhair.title')}</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <img 
              src={cvImage} 
              alt="Zouhair Ghaouri's Resume" 
              className="img-fluid shadow-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
            className="d-inline-flex align-items-center justify-content-center"
          >
            <AiOutlineDownload className="me-2" />
            {i18n.t('resumezouhair.download')} 
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
