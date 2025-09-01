import React from "react";
import { Download } from "lucide-react"; // icon library
import resumeImg from "../assets/resume/resume.png"; // resume preview image
import resumePDF from "../assets/1Resume.pdf"; // actual resume file

function Navbar() {
  // Smooth scroll to section
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-4 text-white fixed top-0 left-0 w-full z-50 bg-transparent">
        <h1 className="text-2xl font-mono">KHUSHI.co</h1>

        <ul className="flex gap-6 text-lg items-center">
          <li
            onClick={() => handleScroll("about")}
            className="hover:text-gray-300 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => handleScroll("follow")}
            className="hover:text-gray-300 cursor-pointer"
          >
            Contact
          </li>
          <li>
            <a
              href="https://github.com/dhaarypravi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Github
            </a>
          </li>

          {/* Resume Hover Card */}
          <li className="relative group">
            <button className="hover:text-gray-300">Resume</button>

            {/* Hover Card */}
            <div className="absolute right-0 mt-2 w-60 bg-white text-black rounded-xl shadow-xl p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              {/* Resume Image */}
              <img
                src={resumeImg}
                alt="Resume Preview"
                className="w-full h-30 object-cover rounded-lg mb-3"
              />

              {/* Download Button */}
              <a
                href={resumePDF}
                download="Khushi_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-pink-700 transition"
              >
                <Download size={18} /> Download
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
