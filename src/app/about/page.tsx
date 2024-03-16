import React from "react";
import aboutStyles from "@styles/homestyles.module.css";
import QuoteComponent from "@components/QuoteComponent";
import AboutImage from "@assets/AboutPageGraphic.svg";
import SkillsComponent from "./SkillsComponent";
import ToolsComponent from "./ToolsComponent";
import { Noto_Serif_Tamil } from "next/font/google";
import Image from "next/image";

const tamilFont = Noto_Serif_Tamil({
  subsets: ["latin"],
});

const About = () => {
  return (
    <>
      <div className="stars" />
      <div className="twinkling" />
      <div className="container">
        <div className={`${aboutStyles.homeAboutSection} container`} id="about">
          <div className={aboutStyles.homeAboutDescription}>
            <h1 className="text-2xl md:text-4xl py-5  md:py-10">
              A Short
              <span className={aboutStyles.secondaryColorClass}>
                {" "}
                Back Story{" "}
              </span>{" "}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
            <div
              className={`${aboutStyles.homeAboutBody} p-5 justify-self-center self-center`}
            >
              I am from
              <b className={aboutStyles.secondaryColorClass}>
                {" "}
                Hosur, TN, India
              </b>
              <br />
              <b className={aboutStyles.secondaryColorClass}>
                Computer Science Engineering Graduate{" "}
              </b>
              from St.Joseph's College of Engineering, Chennai.
              <br />
              <div
                className="tooltip tooltip-right"
                data-tip="To us all towns are our own, everyone our kin"
              >
                <b
                  className={[
                    tamilFont.className,
                    aboutStyles.secondaryColorClass,
                  ].join(" ")}
                >
                  - யாதும் ஊரே யாவரும் கேளீர் -
                </b>
              </div>
              <br />
              Making the world a better place, one line of code at a time. 👨‍💻
              <br />
              When not staring at a glass screen, you can find me immersed in a
              book. 📚
              <br />I hope the Pacific 🌊 is as blue and the Aurora ✨ are as
              mesmerizing as they say.
            </div>
            <div
              className={`${aboutStyles.homeAboutBody} p-5 justify-self-center self-center`}
              id={aboutStyles.aboutGraphic}
            >
              <Image  
                src={AboutImage}
                alt="Yagzan"
                // className=""
              />
            </div>
          </div>
        </div>
        <div>
          <QuoteComponent
            citation=" And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for."
            author="Nancy H. Kleinbaum"
          />
        </div>
        
        <div className={aboutStyles.homeAboutDescription}>
            <h1 className="text-2xl md:text-4xl py-5  md:py-10">
          <b className={aboutStyles.secondaryColorClass}> Professional Armoury</b>
        </h1>
        </div>
         <SkillsComponent className={aboutStyles.homeHeaderContainer} />
        <h1 className={aboutStyles.aboutHeading}>
          <b className={aboutStyles.secondaryColorClass}> Tools I use</b>
        </h1>

        {/* <ToolsComponent className="home-tile-container" /> */}
  
      </div>
    </>
  );
};
export default About;
