import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Olaseigbe Raphael</span>{" "}
            from <span className="purple">Kaduna, Nigeria</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span>
            <br />I hold a Bachelor's degree (BSc) in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Kaduna State University (KASU)</span>.
            <br /> I also hold a certificate in web development from{" "}
            <span className="purple">Khemsafe computer institute</span>.
            <br /> And a diploma in software development from{" "}
            <span className="purple">Cloudsoft consulting Limited</span>.
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Raphael</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
