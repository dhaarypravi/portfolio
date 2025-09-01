import React from "react";
import ProjectCard from "../components/Card";
import sas from "../assets/projectimage/sass.png";
import crowd from "../assets/projectimage/crowd.png";
import steller from "../assets/projectimage/pay.jpg";
import portfoilo from "../assets/projectimage/portfolio.png";
const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      text: "Project Drishti is an AI-powered crowd monitoring and alert platform designed to ensure public safety during large-scale events like festivals, rallies, or religious gatherings.",
      link: "https://example.com",
      image: portfoilo
    },
    {
      title: "Stellar Pay",
      text: "Stellar Pay is a next-generation digital payment platform that simplifies the way people and businesses manage transactions securely and instantly.",
      link: "https://github.com/shreeya11-ss/Hackhazards25",
      image: steller
    },
    {
      title: "Crowd Monitoring and Alert",
      text: "Crowd Monitoring and Alert System tracks, analyzes, and manages crowd density in real time using sensors and image processing.",
      link: "https://github.com/shreeya11-ss/TechBiz_CIH_2.0",
      image: crowd,
    },
    {
      title: "Surprise Planner",
      text: "Surprise Planner is a creative platform that helps users design and organize surprises for their loved ones with ease.",
      link: "https://surprise-planner.netlify.app/",
      image: sas,
    },
  ];

  return (
    <div className="w-full py-20 next-bg">
      {/* Center heading */}
      <h2 className="text-center text-6xl font-bold text-white mb-6 relative">
        <span className="blur-sm text-gray-400 absolute inset-0">Explore the Projects</span>
        <span className="relative">Explore the Projects</span>
      </h2>

      {/* Scrollable cards */}
      <div className="w-full overflow-x-auto">
        <div className="flex px-4 py-6">
          {projects.map((p, i) => (
            <ProjectCard 
              key={i} 
              title={p.title} 
              text={p.text} 
              link={p.link} 
              image={p.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
