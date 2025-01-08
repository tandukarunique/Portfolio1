import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Foodhub"
              description="A food ordering website is an online platform that allows users to browse menus from local restaurants, select dishes, and place orders for delivery or pickup."
              ghLink="https://github.com/tandukarunique/Foodhub"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ecommerce"
              description="Shop smarter with our online store! Discover a wide range of quality products at unbeatable prices. Fast shipping, secure payments, and exclusive deals just for you."
              ghLink="https://github.com/tandukarunique/Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="To-do-app"
              description="Stay on top of your tasks with our simple yet powerful To-Do app! Organize your day, track your progress, and boost your productivity"
              ghLink="https://github.com/tandukarunique/Todoappp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
