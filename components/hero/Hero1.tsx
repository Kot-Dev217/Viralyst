"use client"
import {HeroBG} from "./HeroBG";
import {Btn2} from "../common/btn";
import {Arrow} from "./Arrow";
import { FloatCard } from "./FloatCards";
export function Hero1() {
    return (
        <div className="w-fit max-w-[1280px] h-fit mx-auto relative">
            <div className="w-full h-fit justify-start items-start gap-20 inline-flex mb-[100px]">
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
                    <div className="w-fit mx-auto mt-10 relative">
                        <div
                            className="absolute translate-x-[100%] -right-[13px] border border-cyan-700 px-1 bottom-[26px] w-[93px] origin-top-left rotate-6 text-center text-white text-sm font-normal font-['Inter']">Everything viral starts here</div>
                        <Btn2 name="Get Started 🔥"/>
                        <div
                            className="w-[28.39px] translate-x-[100%] -right-[13px] bottom-[2px] h-[34.45px] absolute origin-top-left rotate-[1deg]">
                            <Arrow/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 hidden xl:block w-full bg-center object-cover">
                <HeroBG/>
            </div>
            <div className=" w-full xl:block hidden">
                <FloatCard/>
            </div>
        </div>
    )
}
