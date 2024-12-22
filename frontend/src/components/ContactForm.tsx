import React from "react";
import Header from "../components/Header";

const Contact: React.FC = () => {
  return (
    <div className="bg-primaryBg text-textPrimary">
      {/* Reuse Header Component */}
      <Header
        title="Craft Your Digital Legacy"
        subtitle="Showcase your creative journey in an elegant, dark-themed portfolio that puts your work in the spotlight."
      />

      {/* Contact Form Section */}
      <section className="py-16 bg-secondaryBg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-textSecondary mb-8">
            Let’s discuss your next creative project
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Name, Email, and Subject */}
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-textSecondary mb-1 text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-primaryBg border border-secondaryBg rounded-md text-textPrimary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-textSecondary mb-1 text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-primaryBg border border-secondaryBg rounded-md text-textPrimary"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-textSecondary mb-1 text-left"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 bg-primaryBg border border-secondaryBg rounded-md text-textPrimary"
                  placeholder="Subject"
                />
              </div>
            </div>

            {/* Right Side: Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-textSecondary mb-1 text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={10}
                className="w-full p-3 bg-primaryBg border border-secondaryBg rounded-md text-textPrimary"
                placeholder="Your Message"
              ></textarea>
            </div>
          </form>
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-textPrimary rounded-md font-medium hover:bg-accent/90 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
