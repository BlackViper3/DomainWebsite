import React from "react";
import { CgCPlusPlus } from "react-icons/cg";

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
  SiExpress,
  SiNextdotjs,
  SiFlutter,
} from "react-icons/si";
import techIconStyles from "@styles/techiconstyles.module.css";
import { IconType } from "react-icons";

const IconComponent: React.FC<{ icon: IconType; key: string }> = (props) => {
  return (
    <div className="tooltip tooltip-bottom" data-tip={props.key}>
      <div className={` ${techIconStyles.techIcons} `}>
        <props.icon />
      </div>
    </div>
  );
};

const SkillsComponent: React.FC<{ className?: string }> = () => {
  [DiJava].map((icon) => <IconComponent icon={icon} key={icon.name} />);

  return (
    <div className="grid place-content-center">
      <div
        className={`grid grid-cols-2 md:grid-cols-4 ${techIconStyles.techIconsContainer}`}
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
          <IconComponent icon={icon} key={icon.name.replace(/Di|Si/g, "")} />
        ))}
      </div>
    </div>
  );
};
export default SkillsComponent;
