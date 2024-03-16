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
} from "react-icons/di";
import {
  SiC,
  SiSpring,
  SiExpress,
} from "react-icons/si";
import techIconStyles from '@styles/techiconstyles.module.css';
import { IconType } from "react-icons";

const IconComponent:React.FC<{icon:IconType,dataTip:string}> = (props) =>{
  return (<div className="tooltip tooltip-bottom" data-tip={props.dataTip}>
  <div className={` ${techIconStyles.techIcons} `}>
  <props.icon />
    </div>
    </div>);
}

const SkillsComponent:React.FC<{className?: string}>= () => {

  [DiJava].map(icon => <IconComponent  icon={icon} dataTip={icon.name} />);

  return (
    <div className="grid place-content-center">
      <div className={`grid grid-cols-2 md:grid-cols-4 ${techIconStyles.techIconsContainer}`}>              
        <div className="tooltip tooltip-bottom" data-tip="Java">
        <div className={` ${techIconStyles.techIcons} `}>
          <DiJava />
        </div>
      
        </div>
        {[DiJava].map(icon => <IconComponent  icon={icon} dataTip={icon.name.replace("Di","")} />)}
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <DiJavascript1 />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <DiPython />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <SiC />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <CgCPlusPlus />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <SiSpring />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <DiDjango />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <DiReact />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <DiAndroid />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <DiNodejs />
        </div>

        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <DiMysql />
        </div>
        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <DiMongodb />
        </div>

        <div className = {` ${techIconStyles.techIcons} tooltip tooltip-bottom`} data-tip="Java">
          <SiExpress />
        </div>
      </div>
    </div>
  );
};
export default SkillsComponent;
