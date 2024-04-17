import { useState, useEffect } from "react";
import "./portfolio.css";
import cross from "./assets/background.svg";
import reactLogo from "./assets/tech/react.png";
import lua from "./assets/tech/lua.png";
import css from "./assets/tech/css.png";
import html from "./assets/tech/html.png";
import python from "./assets/tech/python.png";
import sql from "./assets/tech/sqll.png";
import js from "./assets/tech/js.png";
import ts from "./assets/tech/ts.png";
import tail from "./assets/tech/tail.png";
import flask from "./assets/tech/flask.png";
import next from "./assets/tech/next.png";
import redux from "./assets/tech/redux.png";
import jupyter from "./assets/tech/jupyter.png";
import link from "./assets/tech/link.png";
import git from "./assets/tech/git.png";
import mail from "./assets/tech/mail.png";

function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSize = scrollY > 0 ? 350 + scrollY * 5 : 350;
  const logoRotation = scrollY > 0 ? 45 + scrollY : 45;
  return (
    <div className="portfolio_container">
      <div className="resume">Resume</div>
      <div
        className="bg-logo"
        style={{
          transform: `rotate(${logoRotation}deg)`,
          height: logoSize,
          width: logoSize,
        }}
      >
        {" "}
        <img src={cross} className="logo react" alt="React logo" />
      </div>
      <div className="about_container">
        <div className="about_description">
          <p className="about_description_name">
            Mihir Bag
            <span style={{ color: logoSize <= 500 ? "grey" : "" }}>g</span>a
          </p>
          <p className="about_description_designation">
            Senior Software Developer
          </p>
        </div>
        <div className="about_description_icons">
          <a target="_blank" href="https://www.linkedin.com/in/mihirbagga">
            <img className="rotate" src={link} />
          </a>
          <a target="_blank" href="https://github.com/mihirbagga">
            <img className="rotate" src={git} />
          </a>
          <a
            target="_blank"
            href="mailto:mihirbagga.88@gmail.com?subject=Hi Mihir lets connect&body=Hi Mihir!"
          >
            <img className="rotate" src={mail} />
          </a>
        </div>
      </div>

      <div className="after_about">
        <h1>Technologies</h1>
        <br />
        <div className="tech_stack">
          {[
            js,
            ts,
            css,
            html,
            reactLogo,
            next,
            redux,
            python,
            tail,
            sql,
            lua,
            flask,
            jupyter,
          ].map((lang, idx) => (
            <img className="rotate" src={lang} key={idx} />
          ))}
        </div>
      </div>
      <h1>Experience</h1>
      <div className="experience_section">
        <div className="experience_date">June 2021 - Present</div>
        <div className="experience_summary">
          <p className="experience_company_name">Mareana</p>
          <p className="experience_company_role">Senior Software Developer</p>
          <div className="experience_company_work">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </div>
        </div>
      </div>
      <div className="experience_section">
        <div className="experience_date">Jan 2021 - Jun 2021</div>
        <div className="experience_summary">
          <p className="experience_company_name">Airport Authority Of India</p>
          <p className="experience_company_role">Software Developer Intern</p>
          <div className="experience_company_work">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
