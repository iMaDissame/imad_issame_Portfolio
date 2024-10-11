import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t('typewriter.softwareEngineeringStudent'),
          t('typewriter.webDeveloper'),
          t('typewriter.mernStackDeveloper'),
          t('typewriter.openSourceContributor')
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
