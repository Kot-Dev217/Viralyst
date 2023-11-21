import Image from "next/image"

export const Section1 = () => {
    return (
        <div className="w-[1137px] h-[610px] relative mx-auto">
            <div className="w-[494px] h-[610px] left-0 top-0 absolute">
                <div className="w-[494px] h-[506px] left-0 top-0 absolute rounded-3xl"></div>
                <Image width={494} height={506} src="/assets/img/1.png" alt="1"/>
                <div className="w-[251px] h-[388px] left-[186px] top-[222px] absolute">
                    <div
                        className="w-[251px] h-[388px] left-0 top-0 absolute bg-white rounded-xl shadow"></div>
                    <div className="w-[171px] h-[308px] left-[40px] top-[40px] absolute">
                        <div className="w-[170px] h-[227.21px] left-[1px] top-0 absolute">
                            <div
                                className="w-[11.33px] h-[49.74px] left-0 top-[227.21px] absolute bg-black bg-opacity-50"></div>
                            <div
                                className="w-[11.33px] h-[28.83px] left-[22.67px] top-[206.30px] absolute bg-black bg-opacity-50"></div>
                            <div
                                className="w-[11.33px] h-[133.39px] left-[45.33px] top-[44.09px] absolute bg-black bg-opacity-50"></div>
                            <div
                                className="w-[11.33px] h-[92.13px] left-[68px] top-[85.34px] absolute bg-black bg-opacity-50"></div>
                            <div
                                className="w-[11.33px] h-[177.47px] left-[90.67px] top-0 absolute bg-orange-700 bg-opacity-70"></div>
                            <div
                                className="w-[11.33px] h-[125.47px] left-[113.33px] top-[52px] absolute bg-black bg-opacity-50"></div>
                            <div
                                className="w-[11.33px] h-[149.78px] left-[136px] top-[27.69px] absolute bg-black bg-opacity-50"></div>
                            <div
                                className="w-[11.33px] h-[68.39px] left-[158.67px] top-[109.08px] absolute bg-black bg-opacity-50"></div>
                        </div>
                        <div
                            className="left-0 top-[247px] absolute flex-col justify-start items-start gap-1 inline-flex">
                            <div
                                className="w-[58px] h-[34px] text-sky-950 text-2xl font-bold font-['Inter'] leading-9">30%</div>
                            <div
                                className="w-[177px] h-6 text-sky-950 text-sm font-normal font-['Inter'] leading-normal">More orders each month</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-[493px] h-[479px] left-[644px] top-[66px] absolute flex-col justify-start items-start gap-14 inline-flex">
                <div className="flex-col justify-start items-start gap-10 flex">
                    <div
                        className="w-[493px] h-[164px] text-white text-4xl font-normal font-['Inter'] leading-[56px]">We connect our customers with the best, and help them keep up-and stay open.</div>
                    <div className="h-[159px] flex-col justify-start items-start gap-6 flex">
                        <div className="w-[450px] h-[37px] relative">
                            <div
                                className="w-[387px] h-[37px] left-[63px] top-0 absolute text-white text-xl font-normal font-['Inter'] leading-loose">We connect our customers with the best.</div>
                            <div className="w-9 h-9 left-0 top-[1px] absolute">
                                <div className="w-9 h-9 left-0 top-0 absolute bg-orange-700 rounded-full"></div>
                                <div className="w-6 h-6 left-[6px] top-[6px] absolute"></div>
                            </div>
                        </div>
                        <div className="w-[450px] h-[37px] relative">
                            <div
                                className="w-[387px] h-[37px] left-[63px] top-0 absolute text-white text-xl font-normal font-['Inter'] leading-loose">Advisor success customer launch party.</div>
                            <div className="w-9 h-9 left-0 top-[1px] absolute">
                                <div className="w-9 h-9 left-0 top-0 absolute bg-orange-700 rounded-full"></div>
                                <div className="w-6 h-6 left-[6px] top-[6px] absolute"></div>
                            </div>
                        </div>
                        <div className="w-[450px] h-[37px] relative">
                            <div
                                className="w-[387px] h-[37px] left-[63px] top-0 absolute text-white text-xl font-normal font-['Inter'] leading-loose">Business-to-consumer long tail.</div>
                            <div className="w-9 h-9 left-0 top-[1px] absolute">
                                <div className="w-9 h-9 left-0 top-0 absolute bg-orange-700 rounded-full"></div>
                                <div className="w-6 h-6 left-[6px] top-[6px] absolute"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="px-14 py-4 bg-orange-700 rounded-[56px] border-2 border-sky-950 justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-xl font-bold font-['Inter'] leading-7">Start now</div>
                </div>
            </div>
        </div>
    )
}
