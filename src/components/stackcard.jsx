import React from "react";
import collage from "../assets/aboutcard/collage.jpg";
import grid from "../assets/aboutcard/grid.png";
import leetcode from "../assets/aboutcard/leetcode.png";

const cards = [
  {
    title: "Hackthon",
    description:
      "I have actively participated in numerous hackathons such as SIH, CIH, ISRO, Namespace, Adobe, and many more, where I gained hands-on experience in rapid prototyping and problem-solving under tight deadlines.",
    img: collage,
  },
  {
    title: "GitHub",
    description:
     " I am an enthusiastic developer passionate about building impactful solutions and contributing to open-source ecosystems. My journey spans across diverse domains." ,
     img: grid,
  },
  {
    title: "Competitive Programming",
    description:" Ranked #1 in my institute on GeeksforGeeks, with a Codeforces rating of 800+. On LeetCode, I have solved 200+ problems across various difficulty levels in competitive programming.",
    img: leetcode,
  },
];

export default function StackedCards() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-[400px] h-[360px]">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`
              group absolute w-[400px] h-[360px] bg-[#f6f2f2]
              rounded-xl shadow-2xl overflow-hidden transition-all duration-500
              hover:rotate-0 hover:-translate-y-2 hover:scale-105 hover:z-40
              ${idx === 0 ? "z-30" : idx === 1 ? "z-20" : "z-10"}
            `}
            style={{
              transform: `rotate(-5deg) translate(${idx * -70}px, ${idx * -50}px)`,
            }}
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-black text-2xl font-semibold">
                {card.title}
              </h3>
              <p className="text-black mt-2 text-sm">{card.description}</p>

              {/* Bar */}
              <div className="relative w-3/4 h-1 bg-[#2e3033] mt-4">
                <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-sky-500 via-yellow-600 to-yellow-400 transition-all duration-500 group-hover:w-3/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
