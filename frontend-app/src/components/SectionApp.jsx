import React from 'react'

export default function SectionApp() {
    return (

        <div className="relative mt-8 w-[1416px] h-[941px] bg-[#6de754] rounded-3xl">
            <img className="absolute w-[1302px] h-[494px]
                     left-[57px] top-[447px] rounded-3xl"
                src="/images/imgsec.png" />

            <div className="text-center">

                <p className="absolute w-[474px] left-[471px] top-[347px] text-center text-black text-base 
                            max-w-lg text-sm md:text-base lg:text-lg font-normal font-['SF Pro Text'] 
                            leading-normal tracking-tight">
                                AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT
                </p>

                <h1 className="absolute left-[430px] top-[125px] text-center text-black text-[132px]
                                 font-semibold font-['SF Pro Text']">
                                    10x faster
                </h1>

                <h2 className="w-[420px] h-[114px] left-[507px] top-[96px] absolute text-center md:text-2xl lg:text-3xl 
                                text-black font-semibold font-['SF Pro Text']">
                                    Submit Better job applications
                </h2>

            </div>

            <div className="w-[1416px] h-[534px] left-0 top-[407px] absolute bg-gradient-to-t from-green-900 rounded-3xl" />
        </div>
    )
}
