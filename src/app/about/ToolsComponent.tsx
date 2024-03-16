import React from "react";

import {
  DiDocker,
  DiLinux,
  DiJenkins,
} from "react-icons/di";
import {
  SiAmazonaws,
  SiApachemaven,
  SiPostman,
  SiHeroku,
  SiVisualstudiocode,
  SiSublimetext,
  SiIntellijidea,
  SiJupyter,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import techIconStyles from "@styles/techiconstyles.module.css";
import IconComponent from "./IconComponent";

const ToolsComponent: React.FC<{ className?: string }>  = () => {
  return (
    <>
      <div className="grid place-content-center">
        <div
          className={`grid grid-cols-2 gap-4 md:grid-cols-4 ${techIconStyles.techIconsContainer}`}
        >
          {[
            DiLinux,
            SiIntellijidea,
            SiJupyter,
            SiPostman,
            SiHeroku,
            SiVisualstudiocode,
            AiFillGithub,
            DiJenkins,
            SiAmazonaws,
            DiDocker,
            SiApachemaven,
            SiSublimetext,
          ].map((icon) => (
            <IconComponent icon={icon} key={icon.name} dataTip={icon.name.replace(/Di|Si|AiFill/g, "")} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ToolsComponent;
