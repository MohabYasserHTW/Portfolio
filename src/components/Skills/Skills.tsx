import ProgressBar from "@ramonak/react-progress-bar";
import Section from "../Section/Section";
import "./skills.css";
function Skills() {
  return (
    <Section sectionTitle={"Skills"}>
        <p className="skills_text">As a full stack developer i used to grow up my skills and techniques day by day to meet up with clients needs which gives me alot of skills wich i use to demonstrate websites as fast and efficient as poosible</p>
      <ul className="skills_div">
        <li>
          HTML
          {
            <ProgressBar
              customLabel="90%"
              completed={90}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li>
          CSS
          {
            <ProgressBar
              customLabel="85%"
              completed={85}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li>
          JS
          {
            <ProgressBar
              customLabel="100%"
              completed={100}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li>
          React
          {
            <ProgressBar
              customLabel="80%"
              completed={80}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li>
          NodeJs
          {
            <ProgressBar
              customLabel="90%"
              completed={90}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li>
          MySql
          {
            <ProgressBar
              customLabel="75%"
              completed={75}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        <li>
          MongoDB
          {
            <ProgressBar
              customLabel="80%"
              completed={80}
              labelClassName="progress_label"
              barContainerClassName="progress_container"
            />
          }
        </li>
        
      </ul>
    </Section>
  );
}

export default Skills;
