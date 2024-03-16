import React from "react";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiDjango,
  DiAndroid,
  DiMysql,
  DiPostgresql,
  DiJqueryLogo,
  DiRedis,
} from "react-icons/di";
import {
  SiC,
  SiSpring,
  SiNextdotjs,
  SiFlutter,
} from "react-icons/si";
import techIconStyles from "@styles/techiconstyles.module.css";
import IconComponent from "./IconComponent";


const SkillsComponent: React.FC<{ className?: string }> = () => {

  return (
    <div className="grid place-content-center">
      <div
        className={`grid grid-cols-2 gap-4 md:grid-cols-4 ${techIconStyles.techIconsContainer}`}
      >
        {[
          DiJava,
          DiJavascript1,
          DiPython,
          SiC,
          SiSpring,
          DiDjango,
          DiReact,
          DiJqueryLogo,
          SiNextdotjs,
          DiNodejs,
          DiAndroid,
          SiFlutter,
          DiMongodb,
          DiMysql,
          DiPostgresql,
          DiRedis,
        ].map((icon) => (
          <IconComponent icon={icon} key={icon.name} dataTip={icon.name.replace(/Di|Si|AiFill/g, "")} />
        ))}
      </div>
    </div>
  );
};
export default SkillsComponent;
