import Image from 'next/image'

export const Section2 = () => {
    return (
        <div className="w-[1100px] h-[692px] relative mx-auto mt-[100px]">
            <div className="w-[444px] h-[692px] left-[656px] top-0 absolute">
                <Image width={444} height={523} src="/assets/img/2.png" alt="1"/>
                <div className="w-[291px] h-[388px] left-[48px] top-[304px] absolute">
                    <div
                        className="w-[291px] h-[388px] left-0 top-0 absolute bg-white rounded-xl shadow"></div>
                    <div
                        className="w-[227px] h-[340px] p-[23.79px] left-[32px] top-[24px] absolute justify-center items-center inline-flex">
                        <div className="w-[179.42px] h-[292.42px] relative">
                            <div className="w-[173.47px] h-[173.47px] left-[2.48px] top-0 absolute">
                                <Image width={173} height={173} src="/assets/img/3.png" alt="1"/>
                                
                            </div>
                            <div className="w-[179.42px] h-[95.16px] left-[-0px] top-[197.26px] absolute">
                                <div className="w-[175.44px] h-6 left-[-0px] top-[-1px] absolute">
                                    <div
                                        className="w-[262.52px] left-[12.92px] top-0 absolute text-black text-[18px] font-normal font-['Manrope'] leading-[48px]">35% - Agile Marketing</div>
                                    <div
                                        className="w-[4.97px] h-[4.96px] left-0 top-[20.42px] absolute bg-sky-500 rounded-full"></div>
                                </div>
                                <div className="w-[279.42px] h-6 left-[-0px] top-[34.69px] absolute">
                                    <div
                                        className="w-[266.49px] left-[12.92px] top-0 absolute text-black text-[18px] font-normal font-['Manrope'] leading-[48px]">30% - Keyword Research</div>
                                    <div
                                        className="w-[4.97px] h-[4.96px] left-0 top-[20.42px] absolute bg-emerald-300 rounded-full"></div>
                                </div>
                                <div className="w-[267.23px] h-6 left-[-0px] top-[70.37px] absolute">
                                    <div
                                        className="w-[2674.31px] left-[12.92px] top-0 absolute text-black text-[18px] font-normal font-['Manrope'] leading-[48px]">35% - A/B testing
                                    </div>
                                    <div
                                        className="w-[4.97px] h-[4.96px] left-0 top-[20.42px] absolute bg-stone-300 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[500px] h-[480px] left-0 top-[106px] absolute">
                <div
                    className="w-[493px] h-[164px] left-0 top-0 absolute text-white text-4xl font-normal font-['Inter'] leading-[56px]">We connect our customers with the best, and help them keep up-and stay open.</div>
                <div className="w-[500px] h-[252px] left-0 top-[228px] absolute">
                    <div className="w-[500px] h-[68px] left-0 top-0 absolute">
                        <div
                            className="w-[500px] h-[68px] left-0 top-0 absolute bg-orange-700 rounded shadow"></div>
                        <div className="w-[427px] h-9 left-[20px] top-[16px] absolute">
                            <div className="w-7 h-7 left-0 top-[4px] absolute">
                                <div className="w-6 h-6 left-[2px] top-[2px] absolute"></div>
                            </div>
                            <div
                                className="w-[387px] h-9 left-[40px] top-0 absolute text-white text-base font-normal font-['Inter'] leading-7">We connect our customers with the best.</div>
                        </div>
                    </div>
                    <div className="w-[500px] h-[68px] left-0 top-[92px] absolute">
                        <div
                            className="w-[500px] h-[68px] left-0 top-0 absolute bg-white rounded shadow"></div>
                        <div className="w-[427px] h-9 left-[20px] top-[16px] absolute">
                            <div className="w-7 h-7 left-0 top-[4px] absolute">
                                <div className="w-6 h-6 left-[1.78px] top-[1.65px] absolute"></div>
                            </div>
                            <div
                                className="w-[387px] h-9 left-[40px] top-0 absolute text-black text-base font-normal font-['Inter'] leading-7">Advisor success customer launch party.</div>
                        </div>
                    </div>
                    <div className="w-[500px] h-[68px] left-0 top-[184px] absolute">
                        <div
                            className="w-[500px] h-[68px] left-0 top-0 absolute bg-white rounded shadow"></div>
                        <div className="w-6 h-6 left-[20px] top-[22px] absolute"></div>
                        <div
                            className="w-[387px] h-9 left-[56px] top-[16px] absolute text-black text-base font-normal font-['Inter'] leading-7">Business-to-consumer long tail.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
