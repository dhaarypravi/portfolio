// src/components/PortfolioFooter.jsx
import React from "react";

// SVG Icons
const GithubIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.864 8.167 6.845 9.5a1.5 1.5 0 00.82-.472c.045-.23.07-.63.07-1.157v-1.996c-2.775.605-3.36-1.34-3.36-1.34a2.757 2.757 0 01-1.125-1.556c-.91-.564-2.19-.877-2.19-.877a1.88 1.88 0 011.425 1.056c.925 1.55 2.595 1.1 3.25.83.09-.645.365-1.1.665-1.345-2.475-.275-5.06-1.24-5.06-5.517a4.2 4.2 0 011.13-2.923c-.115-.275-.5-1.31.105-2.885a1.88 1.88 0 011.175-.82c.96-.125 1.955.245 2.875.825a1.444 1.444 0 011.2 0c.92-.58 1.915-.95 2.875-.82a1.88 1.88 0 011.175.82c.605 1.575.225 2.61.105 2.885a4.2 4.2 0 011.13 2.923c0 4.287-2.585 5.24-5.06 5.517.3.245.58.69.665 1.345v1.996c0 .527.025.927.07 1.157a1.5 1.5 0 00.82.472c3.98-1.333 6.845-5.082 6.845-9.5a9.998 9.998 0 00-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm-.153 5.5h-4.694v16h4.694zm7.318 0h-4.694v16h4.694v-8.528c0-2.363 1.295-3.568 3.593-3.568 2.307 0 4.204 1.002 4.204 3.791v8.295h4.694v-10.057c0-6.191-3.15-8.627-7.221-8.627-2.618 0-4.671 1.432-5.753 2.91v-2.585z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1 1 0 110 2 1 1 0 010-2z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 fill-current" viewBox="0 0 32 32">
    <path d="M11.5 28.5L8.2 28.5L20.5 4L23.8 4L11.5 28.5ZM24.5 28.5L28.2 28.5L16.5 4L12.8 4L24.5 28.5ZM21.5 13.5L28.2 13.5L28.2 18.5L21.5 18.5L21.5 13.5ZM17.5 1.5L24.2 1.5L24.2 6.5L17.5 6.5L17.5 1.5ZM2.5 1.5L9.2 1.5L9.2 6.5L2.5 6.5L2.5 1.5Z" />
  </svg>
);

const GFGIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-6h2v6zm4-3h-2V7h2v7z" />
  </svg>
);

const CodeforcesIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-4h2v4zm0-6H11V8h2v2z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#0e2781] text-white py-16 px-8 border-t border-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Logo and Contact Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">KHUSHI.co</h2>
          <p className="text-sm text-white/70">
            A portfolio website built with React and Tailwind CSS.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <a
              href="mailto:khushipandey@example.com"
              className="text-white/70 hover:text-cyan-300 transition-colors duration-300"
            >
              pandeykhushhi@gmail.com
            </a>
          </div>
        </div>

        {/* Social Profiles */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2">Social Profiles</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/dhaarypravi"
                target="_blank"
                className="flex items-center space-x-2 text-white/70 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/khushi-pandey-9a441625b/"
                target="_blank"
                className="flex items-center space-x-2 text-white/70 hover:text-cyan-300 transition-colors"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/khush94321/"
                target="_blank"
                className="flex items-center space-x-2 text-white/70 hover:text-cyan-300 transition-colors"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Coding Platforms */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2">Coding Platforms</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://leetcode.com/u/khu18shi_/"
                target="_blank"
                className="flex items-center space-x-2 text-white/70 hover:text-cyan-300 transition-colors"
              >
                <LeetCodeIcon />
                <span>LeetCode</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/user/khushipandey18/"
                target="_blank"
                className="flex items-center space-x-2 text-white/70 hover:text-cyan-300 transition-colors"
              >
                <GFGIcon />
                <span>GeeksforGeeks</span>
              </a>
            </li>
            <li>
              <a
                href="https://codeforces.com/profile/pandeykhushhi"
                target="_blank"
                className="flex items-center space-x-2 text-white/70 hover:text-cyan-300 transition-colors"
              >
                <CodeforcesIcon />
                <span>Codeforces</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-end md:items-end">
          <div className="mt-8 md:mt-0 text-sm text-white/70 space-y-1 text-center md:text-right">
            <p className="font-semibold text-white">
              &copy; KHUSHI.co | All Rights Reserved.
            </p>
            <p>Made by Khushi Pandey</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
