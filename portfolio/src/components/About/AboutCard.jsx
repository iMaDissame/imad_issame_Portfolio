import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('2nd.greeting')} <span className="purple">{t('2nd.name')}</span>{" "}
            {t('2nd.from')} <span className="purple">{t('2nd.country')}</span>.
            <br />
            {t('2nd.education')}
            <br />
            {t('2nd.passion')}
            <br />
            <br />
            {t('2nd.otherActivities')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('2nd.activities.volunteering')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('2nd.activities.hackathons')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('2nd.activities.learning')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('2nd.activities.communication')}
            </li>
          </ul>

          <p style={{ color: "#f67367 " }}>
            "{t('2nd.quote')}"
          </p>
          <footer className="blockquote-footer">{t('2nd.footer')} GHAOURI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;