"use client"
import {HeroBG} from "./HeroBG";

export function Hero1() {
    return (
        <div className="w-full max-w-[1280px] h-[900px] mx-auto relative">
            <div
                className="w-[1280px] h-[900px] justify-start items-start gap-20 inline-flex">
                <div className="pt-[100px] mx-auto w-fit">
                    <div className="w-[700px] text-center">
                        <span
                            className="text-white text-7xl font-semibold font-['Inter'] leading-[80.64px]">Go
                        </span>
                        <span
                            className="text-orange-700 text-7xl font-semibold font-['Inter']
                        leading-[80.64px] px-4">Viral</span>
                        <span
                            className="text-white text-7xl font-semibold font-['Inter'] leading-[80.64px]">
                            with
                        </span>
                    </div>
                    <div className="w-[700px] text-center pb-8">
                        <span
                            className="text-white text-7xl font-semibold font-['Inter'] leading-[80.64px]">
                            Analysis!
                        </span>
                    </div>
                    <div
                        className="w-[666px] text-center text-zinc-500 text-lg font-normal font-['Inter'] leading-[27px]">Don’t let your computer memories consumes all of those browser tabs.
                        <br/>Findtrend let you gathers all of your favorite website into one place.
                    </div>
                    <div className="w-[188px] h-[57px] px-8 py-4 bg-orange-700 rounded-[40px] justify-center items-center gap-2.5 inline-flex">
    <div className="text-center text-white text-lg font-bold font-['Inter'] leading-[25.20px]">Get Started 🔥</div>
</div>
                </div>
            </div>
            <div className="absolute top-0 hidden xl:hidden w-full bg-center object-cover">
                <HeroBG/>
            </div>
        </div>
    )
}
