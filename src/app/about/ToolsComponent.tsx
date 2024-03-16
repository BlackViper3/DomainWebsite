import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/App.scss";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDjango,
  DiBootstrap,
  DiAndroid,
  DiAws,
  DiDocker,
  DiLinux,
  DiJenkins,
} from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiC,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiAmazonaws,
  SiApachemaven,
  SiExpress,
  SiPostman,
  SiHeroku,
  SiVisualstudiocode,
  SiSublimetext,
  SiIntellijidea,
  SiJupyter,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
const ToolsComponent = () => {
  return (
    <>
      <Row className="tech-icons-container">
        <Col xs={4} md={2} className="tech-icons">
          <DiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiIntellijidea />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJupyter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <AiFillGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJenkins />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiApachemaven />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSublimetext />
        </Col>
      </Row>
    </>
  );
};
export default ToolsComponent;
