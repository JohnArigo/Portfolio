import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Title from "./Title";
import { useState, useRef } from "react";
import { portType } from "./types";

function App() {
  const [portSize, setPortSize] = useState<portType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [scrollSize, setScrollSize] = useState<number>(0);
  const screenPercent = scrollSize / portSize.height;
  const [bgMode, setBgMode] = useState(false);
  return (
    <>
      <Nav
        scrollSize={scrollSize}
        setScrollSize={setScrollSize}
        screenPercent={screenPercent}
        bgMode={bgMode}
        setBgMode={setBgMode}
      />
      <Title
        scrollSize={scrollSize}
        setScrollSize={setScrollSize}
        portSize={portSize}
        setPortSize={setPortSize}
        screenPercent={screenPercent}
        bgMode={bgMode}
      />
      <Experience
        scrollSize={scrollSize}
        setScrollSize={setScrollSize}
        portSize={portSize}
        setPortSize={setPortSize}
        screenPercent={screenPercent}
        bgMode={bgMode}
      />
      <Projects
        scrollSize={scrollSize}
        setScrollSize={setScrollSize}
        portSize={portSize}
        setPortSize={setPortSize}
        screenPercent={screenPercent}
        bgMode={bgMode}
      />
      <Contact
        scrollSize={scrollSize}
        setScrollSize={setScrollSize}
        screenPercent={screenPercent}
        bgMode={bgMode}
      />
    </>
  );
}

export default App;
