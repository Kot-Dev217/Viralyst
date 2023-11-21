import React from 'react';
interface Props {
    name : string
}

export const Btn2 : React.FC < Props > = ({name}) => {
    return (
        <div className="cursor-pointer hover:bg-orange-800 px-8 py-4 bg-orange-700 rounded-full justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-lg font-bold font-['Inter'] leading-[25.20px]">{name}</div>
        </div>
    )
}