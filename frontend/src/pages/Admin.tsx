import React, { useState } from "react";
import AdminLoginForm from "../components/AdminLoginForm";

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Placeholder for backend API call
    console.log("Admin Login Attempt:", { username, password });
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-16 px-4">
        <AdminLoginForm onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="pt-16 px-4">
      <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
      <p className="text-center mt-4 text-gray-500">Manage your portfolio and blog posts.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-light dark:bg-dark p-4 rounded shadow">
          <h2 className="text-xl font-bold">Manage Projects</h2>
          <p className="text-sm text-gray-400">Add, edit, or delete portfolio projects.</p>
          <button className="mt-4 p-2 bg-accent text-white rounded hover:opacity-90">
            Manage Projects
          </button>
        </div>
        <div className="bg-light dark:bg-dark p-4 rounded shadow">
          <h2 className="text-xl font-bold">Manage Blogs</h2>
          <p className="text-sm text-gray-400">Add, edit, or delete blog posts.</p>
          <button className="mt-4 p-2 bg-accent text-white rounded hover:opacity-90">
            Manage Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
