import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const certificates = [
  "/certificates/aws.jpg",
  "/certificates/duke.jpg",
  "/certificates/oracle.jpg",
//   "/certificates/nptel.jpg",
  "/certificates/tata.jpg",
  "/certificates/deloitte.jpg",
  "/certificates/spark.jpg",
  "/certificates/ts.jpg",
  "/certificates/vir.jpg",
  "/certificates/docker.jpg"
];

function CertificateCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Adjusted container height to accommodate larger certificates */}
      <div className="flex items-center justify-center overflow-hidden relative w-[1200px] h-[700px] mx-auto"> {/* Increased h-[600px] to h-[700px] */}
        {certificates.map((cert, i) => {
          let offset = (i - index + certificates.length) % certificates.length;

          if (offset > certificates.length / 2) {
            offset = offset - certificates.length;
          }

          let style = "scale-80 blur-sm opacity-60 brightness-75"; // Slightly bigger, slightly brighter
          if (offset === 0) {
            style = "scale-120 blur-0 opacity-100 z-10 brightness-125"; // Even bigger, much brighter, no blur
          } else if (offset === -1 || offset === 1) {
            style = "scale-95 blur-sm opacity-80 brightness-90"; // Bigger, brighter neighbors
          }

          return (
            <motion.img
              key={i}
              src={cert}
              alt={`Certificate ${i + 1}`}
              className={`absolute w-[500px] h-[500px] object-contain rounded-xl shadow-lg transition-all duration-500 ${style}`} // Adjusted w/h to match new scales
              animate={{ x: offset * 550, zIndex: (offset === 0 ? 10 : 1) }} // Adjusted x offset for larger cards
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CertificateCarousel;