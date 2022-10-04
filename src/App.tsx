import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Title from "./Title";
import { useState } from "react";
import { portType } from "./types";

function App() {
  const [portSize, setPortSize] = useState<portType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  return (
    <body>
      <Nav />
      <Title portSize={portSize} setPortSize={setPortSize} />
      <Experience portSize={portSize} setPortSize={setPortSize} />
      <Projects portSize={portSize} setPortSize={setPortSize} />
      <Contact />
    </body>
  );
}

export default App;
