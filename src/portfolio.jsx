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

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'src/Mihir_Bagga_Resume.pdf';  // Update this path to the actual file location
    link.download = 'Mihir_Bagga_Resume.pdf';  // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
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
      <div className="resume" onClick={()=>downloadResume()}>Resume</div>
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
            <h3><b>Manufacturing Intelligence and CMC (Chemistry, Manufacturing, and Controls)</b></h3>
          <li>
                Spearheaded the Admin module in the Manufacturing Intelligence product, streamlining user experience with a configuration-driven UI and advanced pipeline creation capabilities.
            </li>
            <li>
                Developed a Genealogy hierarchy visualization using D3.js to display manufacturing batch-wise hierarchies, and created an NPM package for reuse across multiple applications.
            </li>
            <li>
                Implemented SAML login integration and e-signature functionalities across all modules, enhancing security and compliance.
            </li>
            <li>
                Developed and managed the scheduler and cron systems for Airflow jobs, successfully integrating these systems across multiple modules of the Manufacturing Intelligence application.
            </li>
            <li>
                Enhanced the reporting tool by implementing caching strategies for JSON data, significantly reducing data retrieval times and improving user experience.
            </li>
            <li>
                Engineered coordinate plotting capabilities within PDFs for paper batch records documents used in manufacturing, ensuring high precision in text extraction.
            </li>
            <li>
                Developed a comprehensive module for seamless resource migration between servers via an intuitive application interface, facilitating efficient server management and maintenance.
            </li>
            <h3><b>Cusa Log</b></h3>
            <li>
                Developed a service to automatically perform a set of operations on files generated by a CUSA machine (a medical machine used in tumor surgery), extracting and transforming the data to decrease the time needed for doctors to visualize or identify machine reports.
            </li>
            <li>
                Implemented error-checking mechanisms in the service, significantly reducing manual work and time needed by doctors to verify machine reports, resulting in hours of saved labor.
            </li>
            <li>
                Automated FTP, Azure, and SharePoint processes for manual file handling, reducing processing time from hours to 5 minutes.
            </li>
            <li>
                Incorporated a file validator script using Python to ensure the file has all the valid information.
            </li>
            <h3><b>Territory Simulation</b></h3>

            <li>
                Developed a comprehensive UI using the Mapbox library for visualizing customer locations and sales territories on interactive maps.
            </li>
            <li>
                Developed Python scripts to extract postal codes and geographic coordinates (latitude and longitude) from customer addresses for all territories, ensuring accurate territory mapping.
            </li>
            <li>
                Implemented advanced mapping tools to track region- and customer-wise sales, providing 15+ dynamic and actionable insights for business decision-making, resulting in 2x sales growth.
            </li>
            <li>
                Led the development of an interactive simulation feature on the map platform for real-time territory management, significantly enhancing the planning and execution of sales strategies.
            </li>
          </div>
        </div>
      </div>
      <div className="experience_section">
        <div className="experience_date">Jan 2021 - Apr 2021</div>
        <div className="experience_summary">
          <p className="experience_company_name">Airport Authority Of India</p>
          <p className="experience_company_role">Software Developer Intern</p>
            <div className="experience_company_work">
            <h3><b>Inventory Management</b></h3>
              <li>
                Designed and Developed UI To add ,edit and remove all the electonic items used in airport office to track the inventory 
              </li>
              <li>
               Developed UI To track the person who has issued the electonic item.
              </li>
              <li>
               Developed UI To raise the request for maintanice and repair of the electronic item.
              </li>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
