import React from "react";

export default function FeatureCard({ title, description, icon }) {
    return (
      <div className="bg-[#262626] p-6 rounded-xl shadow-md hover:shadow-2xl transition flex flex-col items-start space-y-3">
        
        <div className="w-10 h-10 rounded-full flex justify-center items-center">
          <img src={`/images/Icons/${icon}`} alt="" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    );
  }