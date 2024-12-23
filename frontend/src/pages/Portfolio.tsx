import React from "react";
import { portfolioItems } from "../data/fakeData";

const Portfolio: React.FC = () => {
  return (
    <div className="bg-primaryBg text-textPrimary py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-textSecondary">
            Explore my latest projects showcasing modern web development.
          </p>
        </header>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-secondaryBg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                <p className="text-textSecondary mb-6">{item.description}</p>
                <a
                  href={`/portfolio/${item.id}`}
                  className="inline-block px-4 py-2 bg-accent text-textPrimary rounded-md font-medium hover:bg-accent/90 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
