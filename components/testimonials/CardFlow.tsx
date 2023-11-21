"use client"
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import {useState} from 'react'
interface carditem {
    name : string,
    contact : string,
    description : string,
    avatar : string
}
interface Props {
    data : carditem[];
}

export const CardFlow : React.FC < Props > = ({data}) => {
    const [active, setActive] = useState(0);
    const handleClick = (i: number) => () => {
        console.log(i)
        if(active+i>3)return
        if(active+i<0)return
        setActive(active+i);
    };
    return (
        <div className="max-w-[1280px] w-fit h-fit mx-auto">
            <div className="flex justify-between mb-[72px]">
                <div 
                    className="w-[716px] text-white text-5xl font-normal font-['Inter'] leading-[72px]">An enterprise to ramp up your company
                </div>
                <div className="flex mt-[70px]">
                    <div onClick={handleClick(-1)}
                        className="bg-white cursor-pointer mr-7 hover:bg-gray-200 w-[72px] h-[72px] rounded-full flex justify-center items-center text-white">
                        <svg
                            width="36"
                            height="39"
                            viewBox="0 0 36 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M28.5 18L7.5 18"
                                stroke="#0A2640"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>
                            <path
                                d="M18 28.5L7.5 18L18 7.5"
                                stroke="#0A2640"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <div  onClick={handleClick(1)}
                        className="bg-white cursor-pointer hover:bg-gray-200 w-[72px] h-[72px] rounded-full flex justify-center items-center text-white">
                        <svg
                            width="36"
                            height="39"
                            viewBox="0 0 36 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 21H28.5"
                                stroke="#0A2640"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>
                            <path
                                d="M18 10.5L28.5 21L18 31.5"
                                stroke="#0A2640"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    </div>

                </div>
            </div>
            <div className="flex transition-all ">
                {data.slice(active,active+3).map((item, index) => (
                    <Card className="max-w-[340px]  p-8 mx-4" key={index}>
                        <CardBody className="px-3 py-0 text-xl text-gray-900">
                            <p>
                                {item.description}
                            </p>
                        </CardBody>
                        <CardHeader className="justify-between mt-8">
                            <div className="flex gap-5">
                                <Avatar isBordered radius="full" size="md" src="assets/avatars/1.png"/>
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-gray-1000">
                                        {item.name}</h4>
                                    <h5 className="text-small tracking-tight text-gray-600">
                                        {item.contact}</h5>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>

    )
}
