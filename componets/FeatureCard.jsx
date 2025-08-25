import React from "react";

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 shadow-lg hover:scale-105 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;
