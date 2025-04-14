import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiOracle,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiPhp,
  SiDjango,
  SiLaravel,
  SiSpringboot,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiJenkins,
  SiAzuredevops,
  SiJira,
  SiCsharp,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

function Techstack() {
  const { t } = useTranslation();

  return (
    <div style={{ paddingBottom: "50px" }}>
      <h3 style={{ textAlign: "center" }} className="purple">
        {t('techstack.modelingTools')}
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons text-center">
          <span style={{ fontSize: '2rem' }}>{t('techstack.uml')}</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <span style={{ fontSize: '2rem' }}>{t('techstack.merise')}</span>
        </Col>
      </Row>

      <h3 style={{ textAlign: "center" }} className="purple">
        {t('techstack.technologies')}
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons text-center">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <DiBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <SiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <SiDjango />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center"><SiSpringboot /></Col>
        <Col xs={4} md={2} className="tech-icons text-center"><SiCsharp /></Col>
        <Col xs={4} md={2} className="tech-icons text-center"><DiJava /></Col>
        <Col xs={4} md={2} className="tech-icons text-center"><SiDotnet /></Col>
        <Col xs={4} md={2} className="tech-icons text-center"><SiCplusplus /></Col>
        <Col xs={4} md={2} className="tech-icons text-center"><SiC /></Col>
        
        
      </Row>

      <h3 style={{ textAlign: "center" }} className="purple">
        {t('techstack.databaseManagement')}
      </h3>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons text-center">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <SiOracle />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center">
          <SiMicrosoftsqlserver />
        </Col>
        <Col xs={4} md={2} className="tech-icons text-center"><SiPostgresql /></Col>
      </Row>
    </div>
  );
}

export default Techstack;
