import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";

function Projects(props) {
  return (
    <div>
      <h1>Project</h1>

      <Thumbnail
        link="Blah"
        image="Blah Blah"
        title="Bing Bang"
        category="Bananan"
      />

      <Thumbnail
        link="Blah"
        image="Blah Blah"
        title="Bing Bang"
        category="Bananan"
      />

      <Thumbnail
        link="Blah"
        image="Blah Blah"
        title="Bing Bang"
        category="Bananan"
      />
    </div>
  );
}

export default Projects;
