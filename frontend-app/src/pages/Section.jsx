import React from 'react';
import FeatureCard from '../components/FeatureCard';
import SectionApp from '../components/SectionApp';
import SectionApp2 from '../components/SectionApp2';

export default function Section() {
  return (
    <section className="flex flex-col justify-center items-center gap-12 text-white">
      <div className=" mt-[80px] text-center space-y-6">
        <p className="text-6xl font-semibold leading-tight">
          <span className="text-[#6DE754]">Win your dream job </span><br/>
          <span>with PostJob</span>
        </p>
        <p className="max-w-lg mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
          Submit better job applications 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT.
        </p>
      </div>


      <div className="w-full max-w-md mx-auto rounded-2xl border border-gray-500 p-4 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-grow bg-transparent text-white text-base px-4 py-2 border-b sm:border-none focus:outline-none"
        />
        <button className="px-6 py-2 bg-[#6DE754] rounded-lg text-black font-semibold">
          Start For Free
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg">

        <FeatureCard
          title="AI Cover Letter Generator"
          description="Generate personalized cover letters effortlessly 
          using advanced AI technology, tailored to your needs."
          icon="file.png"
        />
        <FeatureCard
          title="Smart Personalization"
          description="Deliver tailored content and experiences using data and technology for optimized results."
          icon="radio.png"
        />
        <FeatureCard
          title="Resume Scanner"
          description="Analyze and optimize resumes with ease using our AI-powered resume scanning technology."
          icon="maximize.png"
        />
      </div>
      <div>
        <SectionApp />
      </div>
      <div>
        <SectionApp2 />
      </div>
      
    </section>
  );
}



