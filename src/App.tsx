import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Title from "./Title";
import { useState, useRef, useEffect } from "react";
import { portType } from "./types";
import { Route, Routes } from "react-router-dom";
import { home } from "./routes";

function App() {
  const [portSize, setPortSize] = useState<portType>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [scrollSize, setScrollSize] = useState<number>(0);
  const screenPercent = scrollSize / portSize.height;
  const [bgMode, setBgMode] = useState(false);

  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      setLoading(false);
    }
  }, [timer]);
  return (
    <>
      <Routes>
        <Route
          path={home}
          element={
            <>
              <Nav
                scrollSize={scrollSize}
                setScrollSize={setScrollSize}
                screenPercent={screenPercent}
                bgMode={bgMode}
                setBgMode={setBgMode}
              />
              <Title
                loading={loading}
                scrollSize={scrollSize}
                setScrollSize={setScrollSize}
                portSize={portSize}
                setPortSize={setPortSize}
                screenPercent={screenPercent}
                bgMode={bgMode}
                timer={timer}
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
                portSize={portSize}
                setPortSize={setPortSize}
                scrollSize={scrollSize}
                setScrollSize={setScrollSize}
                screenPercent={screenPercent}
                bgMode={bgMode}
              />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
