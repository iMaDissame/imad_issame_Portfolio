import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import CountryFlag from 'react-country-flag';

function DynamicLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [rotation, setRotation] = useState(0);

  const languages = [
    { code: 'en', name: 'English', countryCode: 'GB' },
    { code: 'fr', name: 'Français', countryCode: 'FR' },
  ];

  useEffect(() => {
    let interval;
    if (isOpen) {
      interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360);
      }, 50);
    } else {
      setRotation(0);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  const toggleSelector = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="language-selector-container">
      <button onClick={toggleSelector} className={`selector-toggle ${isOpen ? 'open' : ''}`}>
        <Globe size={24} color="white" style={{ transform: `rotate(${rotation}deg)` }} />
      </button>
      {isOpen && (
        <div className="language-options">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`language-option ${selectedLanguage === lang.code ? 'selected' : ''}`}
            >
              <CountryFlag countryCode={lang.countryCode} svg style={{ width: '24px', height: '24px', marginRight: '10px' }} />
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
      <style jsx>{`
        .language-selector-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        .selector-toggle {
          width: 60px;
          height: 60px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f67367; /* Changed the background color here */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        .selector-toggle:hover {
          transform: scale(1.1);
        }
        .selector-toggle.open {
          background: #f67367; /* Keep the background color on open */
        }
        .language-options {
          position: absolute;
          bottom: 70px;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          animation: slideIn 0.3s ease-out;
        }
        .language-option {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 12px 20px;
          border: none;
          background: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .language-option:hover {
          background-color: rgba(110, 142, 251, 0.1);
        }
        .language-option.selected {
          background-color: rgba(110, 142, 251, 0.2);
          font-weight: bold;
        }
        .lang-name {
          font-size: 16px;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default DynamicLanguageSelector;
