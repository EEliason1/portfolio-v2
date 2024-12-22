import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center h-screen text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Craft Your Digital Legacy</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          Showcase your creative journey in an immersive dark-themed portfolio
          that captures attention and leaves a lasting impression.
        </p>
        <a
          href="/portfolio"
          className="inline-block px-8 py-4 bg-accent text-primaryBg font-medium rounded-md shadow-lg hover:bg-accent/90 transition"
        >
          Explore Projects →
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
