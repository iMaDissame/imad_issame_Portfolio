import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t('3rd.title')} <strong className="purple">{t('3rd.name')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt={t('3rd.altText')} className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t('3rd.professionalSkillset')} <strong className="purple">{t('3rd.skillset')}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t('3rd.tools')}</strong> {t('3rd.iUse')}
        </h1>

        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
