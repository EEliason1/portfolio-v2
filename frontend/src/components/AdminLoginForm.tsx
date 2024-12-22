import React, { useState } from "react";

interface AdminLoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const AdminLoginForm: React.FC<AdminLoginFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData.username, formData.password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-light dark:bg-dark shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-accent text-white rounded hover:opacity-90">
        Login
      </button>
    </form>
  );
};

export default AdminLoginForm;
