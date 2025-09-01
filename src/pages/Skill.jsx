import React from 'react'
import SkillsSection from '../components/SkillSection'

function Skill() {
  return (
    <div className="w-full py-50 next-bg">
      <div className='justify-center flex-wrap flex'>
        <div className='w-[1200px] h-[700px] bg-black m-4 rounded-4xl shadow-lg shadow-white/10 p-10'>
          <h2 className="text-center text-6xl font-bold text-white mt-20 relative">
            <span className="blur-sm text-gray-400 absolute inset-0">The Skills.</span>
            <span className="relative">The Skills.</span>
            <p className="mt-4 text-lg font-normal text-gray-300">skill set in problem-solving and software development, with expertise in C++, Python, and JavaScript. My technical strengths span across frontend development (React, HTML, CSS, Tailwind, Bootstrap), backend technologies (Node.js, Express, MongoDB, MySQL), and cloud platforms (AWS, Oracle Cloud).</p>
          </h2>
           {/* <button className="px-6 py-3 mr-20  rounded-lg border border-transparent bg-gray-400 text-sm font-medium text-black hover:bg-gray-200">Know More</button> */}

          <div className='space-y-9 mt-10'>
            <SkillsSection direction="forward" />
            <SkillsSection direction="reverse" />
            <SkillsSection direction="forward" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skill
