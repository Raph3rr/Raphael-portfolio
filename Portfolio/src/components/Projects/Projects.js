import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import likitaai from "../../Assets/Projects/likitaai.png";
import cradle from "../../Assets/Projects/cradle.png";
import gerolab from "../../Assets/Projects/gerolab.png";
import betlyze from "../../Assets/Projects/betlyze.jpg";
import tech from "../../Assets/Projects/tech.jpg";
import caleb from "../../Assets/Projects/caleb.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="lime">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={betlyze}
              isBlog={false}
              title="Betlyze"
              description="Betlyze: An AI-powered football prediction and bet code conversion platform that offers match predictions and allows users to seamlessly convert booking codes between different bookies, built using React and Tailwind, and integrated with football and odds APIs."
              ghLink="https://github.com/Raph3rr/Betlyze"
              demoLink="https://betlyze-seven.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={likitaai}
              isBlog={false}
              title="LikitaAi"
              description="LikitaAI is an AI-powered symptom checker designed to help users understand possible medical conditions based on symptoms they provide. It also offers general treatment advice and supports both English and Hausa languages. Built using ReactJs, DxGpt API, Gemini, Microsoft Azure Ai Translator and Tailwind CSS, LikitaAI aims to provide accessible healthcare information to users."
              ghLink="https://github.com/Raph3rr/LikitaAi"
              demoLink="https://likitaai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cradle}
              isBlog={false}
              title="Cradle"
              description="A platform for designers and developers to connect, collaborate, and grow together. Built using React and Tailwind CSS, this project focuses on clean UI design, smooth scrolling navigation, and a modern SaaS-style layout. "
              ghLink="https://github.com/Raph3rr/Cradle"
              demoLink="https://cradle-dun.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gerolab}
              isBlog={false}
              title="Gerolab"
              description="Gerolab is a web application that provides users with a platform to access laboratory services and information. Built using Html, Css and Js, Gerolab aims to streamline the process of booking lab tests, accessing results, and managing health records online."
              ghLink="https://github.com/Raph3rr/Gerolab"
              demoLink="https://gerolab.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caleb}
              isBlog={false}
              title="Caleb Portfolio"
              description="Caleb's Portfolio: A professional data analyst portfolio website designed to showcase analytical projects, dashboards, and skills, built using React and Tailwind."
              ghLink="https://github.com/Raph3rr/Caleb-Portfolio"
              demoLink="https://caleb-portfolio-rouge.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="Tech School"
              description="Tech School: A tech academy platform offering practical learning tracks in web development, data analysis, and cybersecurity, built using React and Tailwind with a modern SaaS layout."
              ghLink="https://github.com/Raph3rr/Tech-school"
              demoLink="https://tech-school-theta.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
