import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Particle from "../Particle";
import { BsPlayCircle, BsInfoCircle, BsFullscreen, BsFullscreenExit, BsGithub, BsLinkedin , BsYoutube  } from "react-icons/bs";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import './style.css';

import wimmo from "../../Assets/Projects/wimmo.png";
import dreamTravel from "../../Assets/Projects/DreamTravel.png";
import chestXray from "../../Assets/Projects/chestXray.png";
import RideTogether from "../../Assets/Projects/RideTogether.png";
import Data from "../../Assets/Projects/dataa.png";


import ImadImage from '../../Assets/imad.jpeg';
import AmineImage from '../../Assets/agoumi.jpeg';
import MarouanImage from '../../Assets/marouan.jpeg';

const VideoModal = ({ show, onHide, videoSrc, title }) => {
  const { t } = useTranslation();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!show) {
      setError(null);
    }
  }, [show]);

  const getYouTubeEmbedUrl = (url) => {
    let videoId;
    if (url.includes('youtu.be')) {
      videoId = url.split('/').pop();
    } else if (url.includes('youtube.com')) {
      videoId = new URL(url).searchParams.get('v');
    } else {
      videoId = url;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="video-modal">
      <Modal.Header closeButton style={{
        background: 'linear-gradient(135deg, #4a2fb9, #2e2259, #4a2fb9)',
        color: 'white'
      }}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src={getYouTubeEmbedUrl(videoSrc)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {error && <div className="error-message">{error}</div>}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>{t('videoModal.close')}</Button>
        <Button variant="primary" onClick={toggleFullscreen}>
          {isFullscreen ? <BsFullscreenExit /> : <BsFullscreen />}
          {t('videoModal.toggleFullscreen')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CollaboratorSection = styled.div`
  margin-top: 2rem;
  h4 {
    margin-bottom: 1rem;
  }
`;

const CollaboratorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: center;
  height: 100%;
  min-height: 100px; // Set a minimum height

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const CollaboratorName = styled.h5`
  margin-bottom: 0.5rem;
`;

const CollaboratorLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: auto; // Push links to the bottom

   a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .github-link {
    color: #ffffff;
    background-color: #24292e;

    &:hover {
      background-color: #0000;
    }
  }

  .linkedin-link {
    color: #ffffff;
    background-color: #0077b5;

    &:hover {
      background-color: #006097;
    }
  }
`;

const DetailsModal = ({ show, onHide, project }) => {
  const { t } = useTranslation();

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="details-modal">
      <Modal.Header
        closeButton
        style={{
          background: 'linear-gradient(135deg, #4a2fb9, #2e2259, #4a2fb9)',
          color: 'white'
        }}
      >
        <Modal.Title>{t(`projects.${project.id}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <img
              src={project.imgPath}
              alt={t(`projects.${project.id}.title`)}
              className="img-fluid rounded"
              onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
            />
          </Col>
          <Col md={6}>
            <h4>{t('detailsModal.description')}</h4>
            <p>{t(`projects.${project.id}.description`)}</p>
            <h4>{t('detailsModal.technologiesUsed')}</h4>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <h4>{t('detailsModal.keyFeatures')}</h4>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{t(feature)}</li>
              ))}
            </ul>
          </Col>
        </Row>
        {project.collaborators && (
          <CollaboratorSection>
            <h4>{t('detailsModal.collaborators')}</h4>
            <Row>
              {project.collaborators.map((collaborator, index) => (
                <Col key={index} xs={12} sm={6} md={4}>
                  <CollaboratorCard>
                    <ProfileImage src={collaborator.imgPath} alt={collaborator.name} />
                    <CollaboratorName>{collaborator.name}</CollaboratorName>
                    <CollaboratorLinks>
                    <a href={collaborator.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      <BsGithub /> GitHub
                    </a>
                    <a href={collaborator.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                      <BsLinkedin /> LinkedIn
                    </a>
                    </CollaboratorLinks>
                  </CollaboratorCard>
                </Col>
              ))}
            </Row>
          </CollaboratorSection>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>{t('detailsModal.close')}</Button>
        {project.demoVideo && (
          <Button 
            variant="primary" 
            href={`https://www.youtube.com/watch?v=${getYouTubeVideoId(project.demoVideo)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube /> {t('detailsModal.watchDemo')}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={project.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{t(`projects.${project.id}.title`)}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{t(`projects.${project.id}.description`)}</Card.Text>
        <Button
          variant="primary"
          onClick={() => setShowDetailsModal(true)}
          className="mr-2"
        >
          <BsInfoCircle /> &nbsp; {t('projectCard.details')}
        </Button>
        <DetailsModal
          show={showDetailsModal}
          onHide={() => setShowDetailsModal(false)}
          project={project}
        />
      </Card.Body>
    </Card>
  );
};

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "welcomeImmo",
      imgPath: wimmo,
      title: "Welcome Immo",
      description: "projects.welcomeImmo.description",
      demoVideo: "https://youtu.be/7FwrmWoIrHo",
      technologies: ["React.js", "Laravel", "Pusher", "OpenAI API", "MySQL"],
      features: [
        "projects.welcomeImmo.features.0",
        "projects.welcomeImmo.features.1",
        "projects.welcomeImmo.features.2",
        "projects.welcomeImmo.features.3"
      ],
      collaborators: [
        {
          name: "ISSAME Imad",
          imgPath: ImadImage,
          github: "https://github.com/Zouhair-gh",
          linkedin: "https://www.linkedin.com/in/zouhair-ghaouri-0a843b217/"
        }
       ]
    },
    {
      id: "chestXRay",
      imgPath: chestXray,
      title: "Chest X-Ray",
      description: "projects.chestXRay.description",
      demoVideo: "https://youtu.be/_v2rzyRKMY0",
      technologies: ["Python", "Django", "TensorFlow", "Beautiful Soup"],
      features: [
        "projects.chestXRay.features.0",
        "projects.chestXRay.features.1",
        "projects.chestXRay.features.2",
        "projects.chestXRay.features.3",
        "projects.chestXRay.features.4"
      ],
      collaborators: [
        {
          name: "ISSAME Imad",
          imgPath: ImadImage,
          github: "https://github.com/Zouhair-gh",
          linkedin: "https://www.linkedin.com/in/zouhair-ghaouri-0a843b217/"
        },
        {
          name: "Mohammed Amine AGOUMI",
          imgPath: AmineImage,  
          github: "https://github.com/aminegumi",
          linkedin: "https://www.linkedin.com/in/mohammed-amine-agoumi-39bb96222/"
        },

       ]
    },
    {
      id: "rideTogether",
      imgPath: RideTogether,
      title: "Ride Together",
      description: "projects.rideTogether.description",
      demoVideo: "https://youtu.be/6rmYx5Nk7kQ",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "projects.rideTogether.features.0",
        "projects.rideTogether.features.1",
        "projects.rideTogether.features.2"
      ],
      collaborators: [
        {
          name: "ISSAME Imad",
          imgPath: ImadImage,
          github: "https://github.com/Zouhair-gh",
          linkedin: "https://www.linkedin.com/in/zouhair-ghaouri-0a843b217/"
        },
        {
          name: "Mohammed Amine AGOUMI",
          imgPath: AmineImage,  
          github: "https://github.com/aminegumi",
          linkedin: "https://www.linkedin.com/in/mohammed-amine-agoumi-39bb96222/"
        },
        {
          name: "Morad Marouan",
          imgPath: MarouanImage,  
          github: "https://github.com/MarouaneMorad",
          linkedin: "https://www.linkedin.com/in/marouane-morad-9bbb52245/"
        }
      ]
      
    },
    {
      id: "dreamTravel",
      imgPath: dreamTravel,
      title: "Dream Travel",
      description: "projects.dreamTravel.description",
      demoVideo: "https://youtu.be/fV6PQHPus9k",
      technologies: ["Python", "Django", "Google Maps API", "Beautiful Soup", "TensorFlow"],
      features: [
        "projects.dreamTravel.features.0",
        "projects.dreamTravel.features.1",
        "projects.dreamTravel.features.2",
        "projects.dreamTravel.features.3"
      ],
      collaborators: [
        {
          name: "Morad Marouan",
          imgPath: MarouanImage,  
          github: "https://github.com/MarouaneMorad",
          linkedin: "https://www.linkedin.com/in/marouane-morad-9bbb52245/"
        },
        {
          name: "ISSAME Imad",
          imgPath: ImadImage,
          github: "https://github.com/Zouhair-gh",
          linkedin: "https://www.linkedin.com/in/zouhair-ghaouri-0a843b217/"
        }
       ]
    },
    {
      id: "disneyDataExploration",
      imgPath: Data,
      title: "Disney Data Exploration",
      description: "projects.disneyDataExploration.description",
      demoVideo: "https://github.com/iMaDissame/Amazon-Exploratory-Data-Analysis-.git",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      features: [
        "projects.disneyDataExploration.features.0",
        "projects.disneyDataExploration.features.1",
        "projects.disneyDataExploration.features.2",
        "projects.disneyDataExploration.features.3"
      ],
      collaborators: [
        {
          name: "Mohammed Amine AGOUMI",
          imgPath: AmineImage,  
          github: "https://github.com/aminegumi",
          linkedin: "https://www.linkedin.com/in/mohammed-amine-agoumi-39bb96222/"
        },
      ]
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.heading.recent')} <strong className="purple">{t('projects.heading.works')}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.subheading')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

