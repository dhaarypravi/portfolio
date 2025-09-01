import React from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Certificate from "./pages/certificate";
import Follow from "./pages/Follow";
import Footer from "./pages/footer";


function App() {
  return (
    <>
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Spline Background */}
      <Spline
        scene="https://prod.spline.design/bkz-SasIf-vCajb4/scene.splinecode"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Navbar */}
      <Navbar />

      {/* Centered Text */}
      <div className="flex justify-center items-center h-full text-center z-10 relative">
        <div>
          <h1 className="text-5xl font-bold text-white mr-80">
            
            <span className="text-cyan-300 font-normal">
              <Typewriter
                words={["KHUSHI.co", "Coder.", "Developer.", "Designer.", "Creator."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
         
        </div>
      </div>
    </div>
    <div id="about">
    <About  />
    </div>

    <div id="project">
      <Project  />
    </div>
    <div id="skill">
      <Skill  />
    </div>
    <Certificate />
    <div id="follow">
      <Follow  />
    </div>
    <div id="contact">
    <Footer  />
    </div>
    </>
  );
}

export default App;
