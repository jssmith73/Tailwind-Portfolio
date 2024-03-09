import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faLink)

export const Image = ({ title, smallImage, link, githubLink }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
          <div className="hover-text">
            <h4>{title}</h4>
            <div className="space-x-5">
              <a href={githubLink} className="space-x-5">
            <FontAwesomeIcon className="fa-fw" icon="fa-brands fa-github" size="2xl" color="white"/>
            </a>
            <a href={link}>
            <FontAwesomeIcon icon="fa-solid fa-link" size="2xl" className="m-5" color="white"/>
            </a>
            </div>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
      </div>
    </div>
  );
};
