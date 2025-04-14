import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,         
  SiGithub,
  SiAzuredevops,       
  SiJira,
  SiDocker,
  SiFigma,
  SiJenkins,        
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center"><SiDocker /></Col>
              <Col xs={4} md={2} className="tech-icons text-center"><SiFigma /></Col>
              <Col xs={4} md={2} className="tech-icons text-center"><SiJenkins /></Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center"><SiAzuredevops /></Col>
    </Row>
  );
}

export default Toolstack;
