import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Particle from "../Particle";
import { BsPlayCircle, BsInfoCircle, BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import './style.css';

// Import your project images
import wimmo from "../../Assets/Projects/wimmo.png";
import dreamTravel from "../../Assets/Projects/DreamTravel.png";
import chestXray from "../../Assets/Projects/chestXray.png";
import RideTogether from "../../Assets/Projects/RideTogether.png";
import Data from "../../Assets/Projects/dataa.png";

//import videos
import wimmovid from '../../Assets/videos/wimmo.mp4';
import dreamTravelVideo from "../../Assets/videos/DreamTravel.mp4";
import chestXrayVideo from "../../Assets/videos/chestXray.mp4";
import rideTogethervideo from '../../Assets/videos/ridetogether.mp4';

const VideoModal = ({ show, onHide, videoSrc, title }) => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!show) {
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setError(null);
    }
  }, [show]);

  useEffect(() => {
    if (show && videoRef.current) {
      videoRef.current.load();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [show, videoSrc]);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          await videoRef.current.pause();
        } else {
          await videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error("Error toggling play state:", error);
        setError(t('videoModal.playError'));
      }
    }
  };

  const handleModalClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    onHide();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const time = e.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Modal show={show} onHide={handleModalClose} size="lg" centered className="video-modal">
      <Modal.Header closeButton style={{
        background: 'linear-gradient(135deg, #4a2fb9, #2e2259, #4a2fb9)',
        color: 'white'
      }}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="video-container">
          <video
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={togglePlay}
            controls
            onError={() => setError(t('videoModal.loadError'))}
          >
            <source src={videoSrc} type="video/mp4" />
            {t('videoModal.unsupportedBrowser')}
          </video>
          {error && <div className="error-message">{error}</div>}
          <div className="video-controls">
            <Button variant="link" onClick={togglePlay}>
              {isPlaying ? <span>⏸</span> : <span>▶</span>}
            </Button>
            <input
              type="range"
              className="time-slider"
              value={currentTime}
              max={duration || 0}
              onChange={handleSeek}
            />
            <span className="time-display">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <Button variant="link" onClick={toggleMute}>
              {isMuted ? <BiVolumeMute /> : <BiVolumeFull />}
            </Button>
            <Button variant="link" onClick={toggleFullscreen}>
              {isFullscreen ? <BsFullscreenExit /> : <BsFullscreen />}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const DetailsModal = ({ show, onHide, project }) => {
  const { t } = useTranslation();

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
            <img src={project.imgPath} alt={t(`projects.${project.id}.title`)} className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <h4>{t('detailsModal.description')}</h4>
            <p>{t(`projects.${project.id}.description`)}</p>
            <h4>{t('detailsModal.technologiesUsed')}</h4>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{t(`projects.${project.id}.technologies.${index}`)}</li>
              ))}
            </ul>
            <h4>{t('detailsModal.keyFeatures')}</h4>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{t(`projects.${project.id}.features.${index}`)}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>{t('detailsModal.close')}</Button>
        {project.demoVideo && (
          <Button variant="primary" onClick={() => window.open(project.demoVideo, "_blank")}>
            <BsPlayCircle /> {t('detailsModal.watchDemo')}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [showVideoModal, setShowVideoModal] = useState(false);
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
        {project.demoVideo && (
          <Button
            variant="secondary"
            onClick={() => setShowVideoModal(true)}
            style={{ marginLeft: "10px" }}
          >
            <BsPlayCircle /> &nbsp; {t('projectCard.demo')}
          </Button>
        )}
        <VideoModal
          show={showVideoModal}
          onHide={() => setShowVideoModal(false)}
          videoSrc={project.demoVideo}
          title={t(`projects.${project.id}.title`)}
        />
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
      demoVideo: wimmovid,
      technologies: ["React.js", "Laravel", "Pusher", "OpenAI API", "MySQL"],
      features: [
        "projects.welcomeImmo.features.0",
        "projects.welcomeImmo.features.1",
        "projects.welcomeImmo.features.2",
        "projects.welcomeImmo.features.3"
      ]
    },
    {
      id: "dreamTravel",
      imgPath: dreamTravel,
      title: "Dream Travel",
      description: "projects.dreamTravel.description",
      demoVideo: dreamTravelVideo,
      technologies: ["Python", "Django", "Google Maps API", "Beautiful Soup", "TensorFlow"],
      features: [
        "projects.dreamTravel.features.0",
        "projects.dreamTravel.features.1",
        "projects.dreamTravel.features.2",
        "projects.dreamTravel.features.3"
      ]
    },
    {
      id: "chestXRay",
      imgPath: chestXray,
      title: "Chest X-Ray",
      description: "projects.chestXRay.description",
      demoVideo: chestXrayVideo,
      technologies: ["Python", "Django", "TensorFlow", "Beautiful Soup"],
      features: [
        "projects.chestXRay.features.0",
        "projects.chestXRay.features.1",
        "projects.chestXRay.features.2",
        "projects.chestXRay.features.3",
        "projects.chestXRay.features.4"
      ]
    },
    {
      id: "rideTogether",
      imgPath: RideTogether,
      title: "Ride Together",
      description: "projects.rideTogether.description",
      demoVideo: rideTogethervideo,
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "projects.rideTogether.features.0",
        "projects.rideTogether.features.1",
        "projects.rideTogether.features.2"
      ]
    },
    {
      id: "disneyDataExploration",
      imgPath: Data,
      title: "Disney Data Exploration",
      description: "projects.disneyDataExploration.description",
      demoVideo: "https://github.com/Zouhair-gh/Disney-Data-Exploration.git",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      features: [
        "projects.disneyDataExploration.features.0",
        "projects.disneyDataExploration.features.1",
        "projects.disneyDataExploration.features.2",
        "projects.disneyDataExploration.features.3"
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