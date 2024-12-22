import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondaryBg text-textSecondary py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-lg font-bold text-textPrimary">ShadowCraft</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent transition">
            Instagram
          </a>
          <a href="#" className="hover:text-accent transition">
            Behance
          </a>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-accent transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-accent transition">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; 2025 ShadowCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
