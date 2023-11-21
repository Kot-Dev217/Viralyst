import Image from 'next/image'

export default function Feature() {
    return (
        <div className="w-[1133px] h-[791px] relative mx-auto mt-[100px]">
    <div className="w-[1100px] h-[403px] left-0 top-0 absolute">
        <Image width={1100} height={403} src='/assets/img/4.png' alt="1"/>
      </div>
    <div className="w-[1133px] h-[179px] left-0 top-[449px] absolute">
        <div className="h-[159px] left-[640px] top-[20px] absolute flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[450px] h-[37px] relative">
                <div className="w-[387px] h-[37px] left-[63px] top-0 absolute text-white text-xl font-normal font-['Inter'] leading-loose">We connect our customers with the best.</div>
                <div className="w-9 h-9 left-0 top-[1px] absolute">
                    <div className="w-9 h-9 left-0 top-0 absolute bg-orange-700 rounded-full"></div>
                    <div className="w-6 h-6 left-[6px] top-[6px] absolute">
                    <Image width={24} height={24} src='/assets/icon/check.svg' alt='6' />

                    </div>
                </div>
            </div>
            <div className="w-[450px] h-[37px] relative">
                <div className="w-[387px] h-[37px] left-[63px] top-0 absolute text-white text-xl font-normal font-['Inter'] leading-loose">Advisor success customer launch party.</div>
                <div className="w-9 h-9 left-0 top-[1px] absolute">
                    <div className="w-9 h-9 left-0 top-0 absolute bg-orange-700 rounded-full"></div>
                    <div className="w-6 h-6 left-[6px] top-[6px] absolute">
                    <Image width={24} height={24} src='/assets/icon/check.svg' alt='6' />

                    </div>
                </div>
            </div>
            <div className="w-[450px] h-[37px] relative">
                <div className="w-[387px] h-[37px] left-[63px] top-0 absolute text-white text-xl font-normal font-['Inter'] leading-loose">Business-to-consumer long tail.</div>
                <div className="w-9 h-9 left-0 top-[1px] absolute">
                    <div className="w-9 h-9 left-0 top-0 absolute bg-orange-700 rounded-full"></div>
                    <div className="w-6 h-6 left-[6px] top-[6px] absolute">
                        <Image width={24} height={24} src='/assets/icon/check.svg' alt='6' />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[500px] h-[164px] left-0 top-0 absolute text-white text-4xl font-normal font-['Inter'] leading-[56px]">We connect our customers with the best, and help them keep up-and stay open.</div>
    </div>
    <div className="px-14 py-4 left-[446px] top-[709px] absolute bg-orange-700 rounded-[56px] border-2 border-sky-950 justify-center items-center gap-2 inline-flex">
        <div className="text-white text-xl font-bold font-['Inter'] leading-7">Start now</div>
    </div>
</div>
    )
}
