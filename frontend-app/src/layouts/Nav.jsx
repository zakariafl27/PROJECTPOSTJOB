import React from 'react';

export default function Nav() {
  return (

    <nav className="w-full max-w-screen-xl left-[70px] mx-auto h-2 
                    px-[104px] pt-16 pb-4 flex justify-between inline-flex 
                    items-center">

      <div className="flex items-center gap-1">

        <div className="w-[24px] h-[24px]">
          <img src="/images/logo.png" alt="" />
        </div>

        <span className="text-white mb-2 w-[59px] h-[19px] text-lg font-medium">
          PostJob
        </span>

      </div>

      <div className="hidden md:flex items-center gap-6">

        <a href="#" className="text-gray-400 text-base font-semibold hover:text-white transition">
          AI Cover Letter Generator
        </a>

        <a href="#" className="text-gray-400 text-base font-semibold hover:text-white transition">
          Resume Template
        </a>

        <a href="#" className="text-gray-400 text-base font-semibold hover:text-white transition">
          Pricing
        </a>

      </div>

      <div className="relative flex font-semibold left-[270px] items-center gap-4">

        <button className="px-6 py-2 border border-[#6DE754] text-white 
                            rounded-lg hover:bg-[#6DE754] transition">
          Sign In
        </button>
        <button className="px-6 py-2 bg-[#6DE754] text-black rounded-lg">
          Get Started
        </button>
      </div>

    </nav>
  );
}
