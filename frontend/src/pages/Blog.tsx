import React from "react";
import { blogPosts } from "../data/fakeData";

const Blog: React.FC = () => {
  return (
    <div className="bg-primaryBg text-textPrimary py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-textSecondary">
            Insights, tutorials, and tips for developers and designers.
          </p>
        </header>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-secondaryBg rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-textSecondary mb-6">{post.description}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-block px-4 py-2 bg-accent text-textPrimary rounded-md font-medium hover:bg-accent/90 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
