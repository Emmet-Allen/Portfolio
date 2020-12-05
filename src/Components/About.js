import React from "react";

// About Me Bio and Tl;Dr
const About = () => {
  const tlDr =
    "I am a developer who focuses on application ranging from the Desktop to the Web";

  const Bio =
    "My name is Emmet Allen, I am currently working on website applications using technologies such as React, Firebase, Node, and Figma.";

  const [text, setText] = React.useState(Bio);
  const handleClick = () => {
    if (text === tlDr) {
      setText(Bio);
    } else {
      setText(tlDr);
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button onClick={handleClick}>Tl;Dr</button>
    </React.Fragment>
  );
};
export default About;
