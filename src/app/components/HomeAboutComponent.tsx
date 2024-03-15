"use client";
import React from "react";
import aboutStyles from "@styles/homestyles.module.css";
import Image from "next/image";
import YagzanProfilePic from "@assets/YagzanProfilePic.svg";
const HomeAboutComponent = () => {
  return (
    <div className={`container ${aboutStyles.homeAboutSection}`} id="about">
      <div>
        <div className={aboutStyles.homeAboutDescription}>
          <h1 className=" text-2xl md:text-4xl">
            LET ME{" "}
            <span className={aboutStyles.secondaryColorClass}> INTRODUCE </span>{" "}
            MYSELF
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
            <div className="p-5 justify-self-center">
              <div className={aboutStyles.avatarImageContainer}>
                <Image src={YagzanProfilePic} alt="Yagzan" className="" />
              </div>
            </div>
            <p className={aboutStyles.homeAboutBody}>
              I have one superpower,
              <b className={aboutStyles.secondaryColorClass}>
                {" "}
                I never give up.{" "}
              </b>
              <br />A{" "}
              <b className={aboutStyles.secondaryColorClass}>
                full stack engineer{" "}
              </b>
              who has ample experience developing scalable Enterprise Grade
              applications.
              <br />I love using technology to empower and emancipate the
              underpriveledged
              <br />I am proficient in{" "}
              <b className={aboutStyles.secondaryColorClass}>
                Java, Javascript, Python, C and C++.
              </b>
              <br />
              <b className={aboutStyles.secondaryColorClass}>
                Spring, React, Django{" "}
              </b>
              are some web frameworks I am comfortable in.
              <br />I can build solutions in{" "}
              <b className={aboutStyles.secondaryColorClass}>AWS and Docker </b>
              with help of
              <b className={aboutStyles.secondaryColorClass}>
                {" "}
                Jenkins and Nexus
              </b>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAboutComponent;
