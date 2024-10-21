import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{ transition: "background-color 0.3s" }}
      dir={isArabic ? "rtl" : "ltr"} // Set direction based on language
    >
      <Container>
      <Navbar.Brand href="/imad_issame_Portfolio/#/" className="d-flex align-items-center">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: isArabic ? "row-reverse" : "row", // Change the direction of the name and logo
            }}
          >
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "rgba(222, 130, 235, 0.911)",
                marginLeft: isArabic ? "0.5rem" : "0",
                marginRight: isArabic ? "0" : "0.5rem", // Swap the margin to ensure proper alignment
              }}
            >
              I
            </span>
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
                color: "WHITE",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textAlign: isArabic ? "right" : "left", // Align the name correctly
              }}
            >
              SSAME IMAD
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={isArabic ? "ms-auto text-end" : "ms-auto"} defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar.resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/certificate" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar.certificate")}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .navbar {
          background-color: transparent;
          transition: background-color 0.3s;
        }
        .sticky {
          background-color: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;
