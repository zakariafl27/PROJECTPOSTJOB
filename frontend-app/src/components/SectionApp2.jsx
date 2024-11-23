import React from 'react'
import { Info_Cards } from '../tools/InfoCards'

export default function SectionApp2() {
    return (
        <div className="min-h-screen px-8 lg:px-36 py-10 flex flex-col items-center gap-8">

            <div className="text-center flex flex-col items-center gap-y-6">
                <h1 className="text-white text-6xl font-semibold font-['SF Pro Text']">
                    Spend less time <br/>
                    <span>looking for work</span> 
                </h1>
                <p className="max-w-md text-[#8f8f8f] text-sm md:text-base font-normal leading-tight tracking-tight">
                    We'll help you through the hardest part of your job search.
                </p>
                <button className="px-8 py-3 rounded-xl border border-[#6de754] hover:bg-[#6de754] text-white text-sm md:text-base font-semibold">
                    Create an Account
                </button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Info_Cards.map((card, index) => (
                    <div
                        key={index}
                        className="p-6 bg-[#1e201d] rounded-xl flex flex-col gap-4"
                    >
                        <img src={`/images/Icons/${card.icon}`} className="w-6 h-6" />
                        <h3 className="text-white text-base font-semibold">{card.title}</h3>
                        <p className="text-[#8f8f8f] text-sm md:text-base leading-tight">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}
