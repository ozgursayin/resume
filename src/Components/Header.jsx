import React from "react";
import ParticlesBg from "particles-bg";

const Header = ({ data }) => {
  const project = data.project;
  const github = data.github;
  const name = data.name;
  const description = data.description;
  const city = data.address.city;
  const networks = data.social.map((network) => {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{name}</h1>
          <h3>{description}.</h3>
          <hr />
          <ul className="social">
            <a href={project} className="button btn project-btn">
              <i className="fa fa-linkedin"></i>Linkedin
            </a>
            <a href={github} className="button btn github-btn">
              <i className="fa fa-github"></i>Github
            </a>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
