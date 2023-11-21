import React from 'react';
interface Props {
    name : string
}

export const Btn2 : React.FC < Props > = ({name}) => {
    return (
        <div
            className="p-4 bg-[#65e4a3] text-lg font-bold px-4 py-1 rounded-full text-black w-fit text-sm">
            {name}
        </div>
    )
}