import React from 'react';
import './About.css';
import StackCards from '../components/stackcard'; 

const About = () => {
  return (
    <section id="about" className="h-screen next-bg text-white">
      <div className="container mx-auto p-8 h-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content - This will be on the left */}
        <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
          <p className="text-2xl font-mono tracking-tight">
            (About.)
          </p>
          <p className="mt-8 text-xl max-w-2xl leading-relaxed">
            Hi, I’m Khushi Pandey! I am a passionate and dedicated developer with a keen interest in building innovative web and mobile solutions. I enjoy turning ideas into functional, user-friendly applications that solve real-world problems.

            I have hands-on experience with technologies like React, React Native, Next.js, Node.js, and I am constantly exploring new tools and frameworks to expand my skill set. I am highly motivated to learn, adapt, and contribute to projects that make an impact.

            When I’m not coding, I love exploring new tech trends, solving challenging problems, and creating projects that combine creativity with functionality.

            Let’s build something amazing together!
            <strong className="font-bold">high-quality web applications</strong> with the power of React components.
          </p>
         
        </div>

        {/* Stacked Cards - This will be on the right, shifted more to the right */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0 md:pl-20"> {/* Added md:pl-20 */}
          <StackCards containerBgColor="bg-black" />
        </div>
      </div>
    </section>
  );
};

export default About;