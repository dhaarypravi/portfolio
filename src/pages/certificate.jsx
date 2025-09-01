import React from 'react'
import Spline from '@splinetool/react-spline';
import CertificateCarousel from '../components/CertificateCard'; // Assuming CertificateCard is the correct path for your carousel

function Certificate() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/rDpsjx2o9m5dKhlN/scene.splinecode" />
      </div>

      {/* Optional overlay for contrast - keep this or adjust its opacity if needed */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center px-7 py-20 pt-[10vh]"> {/* Adjusted padding-top */}
        <h2 className="text-6xl font-bold text-gray-300 relative">
          <span className="absolute inset-0 blur-sm text-gray-400">The Certificates.</span>
          <span className="relative">The Certificates.</span>
        </h2>
        <p className="mt-6 text-lg font-normal text-gray-300 max-w-3xl">
          I have successfully completed industry-recognized certifications from leading organizations such as Oracle, Meta, AWS, Infosys, and Cisco. These certifications have allowed me to strengthen my expertise in areas like cloud computing, web development.
        </p>

        {/* Adjust margin-top to move the carousel up */}
        <div className="mt-8 w-full flex justify-center"> {/* Reduced mt-16 to mt-8 */}
          <CertificateCarousel />
          {/* REMOVED: The gradient overlay div is removed */}
        </div>
      </div>
    </div>
  )
}

export default Certificate