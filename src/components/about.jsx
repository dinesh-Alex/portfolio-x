
import { useState } from "react";
import "../components/mediaq.css"
function About() {
  const [exp, setExp] = useState(true);
  const [ski, setSkills] = useState(false);
  const [pro, setProj] = useState(false);
  const [ed, setEd] = useState(false);
  const [cor, setCor] = useState(false);

  return (
    <div id="about-container">
      <h2>About ME</h2>
      <div id="about-option">
        <ul style={{ listStyleType: "none" }}>
          <li
            onClick={() =>
              setExp(true) &
              setSkills(false) &
              setProj(false) &
              setEd(false) &
              setCor(false)
            }
          >
            Experience
          </li>
          <li
            onClick={() =>
              setExp(false) &
              setSkills(true) &
              setProj(false) &
              setEd(false) &
              setCor(false)
            }
          >
            Skills
          </li>
          <li
            onClick={() =>
              setExp(false) &
              setSkills(false) &
              setProj(true) &
              setEd(false) &
              setCor(false)
            }
          >
            Projects
          </li>
          <li
            onClick={() =>
              setExp(false) &
              setSkills(false) &
              setProj(false) &
              setEd(true) &
              setCor(false)
            }
          >
            Education
          </li>
          <li
            onClick={() =>
              setExp(false) &
              setSkills(false) &
              setProj(false) &
              setEd(false) &
              setCor(true)
            }
          >
            Courses
          </li>
        </ul>
      </div>
      <div id="about-card">
        {exp ? (
          <div className="item exp">
            <p>Software Developer intern @ Caset [July 2022- Jan 2023]</p>
            <li>Responsible for developing landing page for the product.</li>
            <li>Implemented responsive web designs using CSS media queries.</li>
            <li>Responsible for developing dashboards for internal sites.</li>

            <p>Data Analyst @ Jobiak [Sep 2019- Feb 2020] </p>
            <li>Data analysis of types of career pages of companies.</li>
            <li>Product testing with different test cases.</li>
            <li>
              Data collection for different cases used for software development 
            </li>
          </div>
        ) : null}
        {ski ? (
          <div className="item skills">
            <p>Javascript</p>
            <p>HTML & CSS</p>
            <p>React.js</p>
            <p>JQuery</p>
            <p>Node.js</p>
            <p>Bootstrap</p>
          </div>
        ) : null}
        {pro ? (
          <div className="item projects">
            <p>Tincat</p>
            <p>Simon Game</p>
            <p>Keep Notes</p>
            <p>Current Portfolio</p>
            <p>Student Registration Website</p>
          </div>
        ) : null}

        {ed ? (
          <div className="item education">
            <p>MBA-HR @ Dr.Lankapalli Bullayya College</p>
            <p>
              B.Tech-Computer Science & Engineering @ Vignan's institute of
              information & Technology
            </p>
            <p>Intermediate(11th & 12th) @ Narayana College</p>
            <p>High School (10th) @ Pollocks School</p>
          </div>
        ) : null}

        {cor ? (
          <div className="item courses">
            <p>Udemy Web development Course By Angela </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default About;
