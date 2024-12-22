import React from "react";
import { portfolioItems } from "../data/fakeData";

const FeaturedWorks: React.FC = () => {
  // Filter featured items (add a "featured" property to relevant portfolio items)
  const featuredItems = portfolioItems.slice(0, 3); // Display the first three items as an example

  return (
    <div className="bg-primaryBg text-textPrimary py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Works</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-secondaryBg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-textSecondary mb-4">{item.description}</p>
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

export default FeaturedWorks;
