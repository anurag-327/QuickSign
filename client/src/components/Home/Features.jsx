import React from "react";

const Features = () => {
  return (
    <section className="container border-t-2 mx-auto px-4  py-16">
      <h2 className="text-5xl font-bold  font-sans">Why Quicksign?</h2>
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-sans font-bold mb-4">
            Seamless Authentication
          </h2>
          <p className="text-gray-500 hover:text-gray-800 transition-all duration-2000">
            Simplify the login process and enjoy a frictionless, user-friendly
            experience.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-sans font-bold mb-4">
            Minimal Data Storage
          </h2>
          <p className="text-gray-500 hover:text-gray-800 transition-all duration-200">
            QuickSign stores only the necessary data for authentication,
            prioritizing your privacy and data security.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-sans font-bold mb-4">Robust Security</h2>
          <p className="text-gray-500 hover:text-gray-800 transition-all duration-200">
            Your data is treated with the utmost care, employing
            state-of-the-art security measures.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-sans font-bold mb-4">
            User-Friendly Interface
          </h2>
          <p className="text-gray-500 hover:text-gray-800 transition-all duration-200">
            Intuitive design ensures a hassle-free experience for all users,
            tech enthusiasts or casual users alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
