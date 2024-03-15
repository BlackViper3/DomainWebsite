"use client";
import React from "react";

import "@styles/globals.css";
import consoleStyles from "@styles/consolestyles.module.css";
import homeStyles from "@styles/homestyles.module.css";
import { useEffect } from "react";
import Image from "next/image";

import DeveloperSvg from "@assets/Developer.svg";
import QuoteComponent from "@components/QuoteComponent";
import AnimatedInfoConsole from "@components/AnimatedInfoComponent";
import HomeAboutComponent from "@components/HomeAboutComponent";

const HomePageComponent = () => {
  useEffect(() => {
    const promptWork = document.querySelector<HTMLElement>("#promptWork");
    const promptHome = document.querySelector<HTMLElement>("#promptHome");

    const phrasesHome = ["Tech Cognoscenti", "Cinephile", "Biblophile"];
    const phrasesWork = [
      "Fullstack Developer",
      "DevOps Engineer",
      "Systems Architect",
    ];

    let interval;
    let currWorkPhrase = phrasesWork[0];
    let currHomePhrase = phrasesHome[0];

    let idW = 0;
    let idH = 0;

    promptWork!.textContent = currWorkPhrase;
    promptHome!.textContent = currWorkPhrase;

    interval = setInterval(() => {
      idH = (idH + 1) % 3;
      currHomePhrase = phrasesHome[idH];
      currWorkPhrase = phrasesWork[idH];
      promptHome!.textContent = currHomePhrase;
      promptHome!.style.setProperty(
        "--chwidth",
        `${currHomePhrase.length + 1}`,
      );
      promptWork!.textContent = currWorkPhrase;
      promptWork!.style.setProperty(
        "--chwidth",
        `${currWorkPhrase.length + 1}`,
      );
    }, 4500);
  }, []);

  return (
    <>
      <div className="container p-3 grid grid-cols-1 bg-opacity-0 md:grid-cols-2 md:gap-2 justify-items-center align-items-center">
        <div className={`${homeStyles.homeHeaderContainer}`}>
          <h1 className={homeStyles.heading}>
            Hi There!{" "}
            <span className={homeStyles.wave} role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className={homeStyles.headingName}>
            I&apos;m
            <strong className={homeStyles.mainName}> Yagzan Manjunaath</strong>
          </h1>
        </div>
        <div className={`${homeStyles.homeHeaderContainer}`}>
          <Image
            src={DeveloperSvg}
            alt="Developer"
            className={homeStyles.svgImage}
          />
        </div>
      </div>

      <QuoteComponent
        citation="The most important weapon in your arsenal will be your ability to
      adapt."
        author="Batman"
      />

      <HomeAboutComponent />

      <div className={consoleStyles.promptRow}>
        <AnimatedInfoConsole />
      </div>
    </>
  );
};

export default HomePageComponent;
