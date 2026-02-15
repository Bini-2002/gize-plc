import React from 'react';
import heroI2 from "../images/i2.jpeg"; // Setting default to local image

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

function Hero({ 
  title, 
  subtitle, 
  image = heroI2 // Defaulting to your local hero image
}: HeroProps) {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      {/* Sidebar Icon Placeholder to match Home layout if needed */}
      <div className="absolute left-0 top-0 w-16 lg:w-20 h-full bg-[#0B1238] z-20 hidden md:block opacity-20"></div>

      <div className="absolute inset-0 z-0">
        <img src={image} className="w-full h-full object-cover" alt={title} />
        {/* Darker overlay to match the Home page aesthetic */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full ml-16 lg:ml-24">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-none tracking-tighter uppercase">
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {i === 0 ? <span className="text-[#E31B23]">{word[0]}</span> : ""}
                {i === 0 ? word.slice(1) : word} 
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="text-sm md:text-base text-gray-200 font-bold uppercase tracking-[0.4em] mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;