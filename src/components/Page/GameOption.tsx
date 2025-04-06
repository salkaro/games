import Image from 'next/image'
import React from 'react'


interface GameOptionProps {
    keyName: string;
    gameData: {
        desc: string;
        image: string;
        page: string;
    };
    handleClick: (redirect: string) => void;
}

const GameOption: React.FC<GameOptionProps> = ({ keyName, gameData, handleClick }) => {
    return (
        <div
            key={keyName}
            className='col-span-12 sm:col-span-6 2xl:col-span-4 p-4 text-center bg-[#111111] rounded-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-in-out'
            onClick={() => handleClick(gameData.page)}
        >
            <figure className='flex justify-center items-center w-full'>
                <Image
                    src={gameData.image}
                    alt={keyName}
                    width={200}
                    height={200}
                    className='rounded-lg my-4 h-64 w-64 object-cover'
                />
            </figure>
            <p className='text-gray-400 font-bold'>{gameData.desc}</p>
        </div>
    )
}

export default GameOption
