import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Certificate from "./components/Certificate/Certificate";
import './i18n';
import DynamicLanguageSelector from "./components/ChatBot";
import i18n from "i18next"; // Import i18next
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Apply RTL when the language is Arabic
  useEffect(() => {
    const updateDirection = (lang) => {
      if (lang === 'ar') {
        document.body.setAttribute("dir", "rtl");
      } else {
        document.body.setAttribute("dir", "ltr");
      }
    };

    // Update the direction when the app loads
    updateDirection(i18n.language);

    // Listen to the language change event
    i18n.on('languageChanged', (lang) => {
      updateDirection(lang);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      i18n.off('languageChanged', updateDirection);
    };
  }, []);

  return (
    <Router basename="/imad_issame_Portfolio/portfolio">
  <Preloader load={load} />
  <div className="App" id={load ? "no-scroll" : "scroll"}>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
 

        <DynamicLanguageSelector/>
        <Footer />

        {/* Inline JSX Styles for RTL and LTR */}
        <style jsx="true">{`
          body[dir="rtl"] {
            text-align: right;
            direction: rtl;
          }

          body[dir="ltr"] {
            text-align: left;
            direction: ltr;
          }

          /* Example RTL-specific adjustments */
          .certificate-description {
            text-align: justify;
          }

          .certificate-item {
            display: flex;
            flex-direction: row-reverse; /* This flips items for RTL */
          }

          @media (max-width: 767px) {
            .certificate-description {
              padding-top: 20px;
              padding-bottom: 20px;
            }
          }
        `}
        </style>
      </div>
    </Router>
  );
}

export default App;
