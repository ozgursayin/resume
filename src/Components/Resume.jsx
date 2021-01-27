import React from "react";

const Resume = ({ data }) => {
  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const skillmessage = data.skillmessage;
  const education = data.education.map((education) => {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p className="job-description">{education.description}</p>
      </div>
    );
  });
  const work = data.work.map((work) => {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p className="job-description">{work.description}</p>
        <p className="job-description">
          {work.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </p>
      </div>
    );
  });

  const skills = data.skills.map((skills) => {
    const className = "bar-expand " + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span
          style={{
            width: skills.level,
            backgroundColor: getRandomColor(),
          }}
          className={className}
        ></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
