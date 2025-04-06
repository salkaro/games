"use client";

// Local Imports
import Input from '../ui/Input';
import GameOption from './GameOption';
import QuickMathsGame from '../games/quick-maths/QuickMathsGame';

// External Imports
import { JSX, useState } from 'react'
import { useRouter } from 'next/navigation';

const gamesComponents = {
    "Quick Maths": { "game": <QuickMathsGame />, "desc": "Rapid Maths Calculations", "image": "https://i.imgur.com/nwe5xUg.png", "page": "quick-maths" },
}

const RootPage = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [validGames, setValidGames] = useState<Record<string, { game: JSX.Element; desc: string, image: string, page: string }>>(gamesComponents);

    function handleSearchChange(value: string) {
        setSearch(value);

        const filteredGames = Object.fromEntries(
            Object.entries(gamesComponents).filter(([key]) =>
                key.toLowerCase().includes(value.toLowerCase())
            )
        );

        setValidGames(filteredGames);
    }


    function handleClick(redirect: string) {
        router.push(`/games/${redirect}`);

    }


    return (
        <div className='flex flex-col items-center w-full h-full pb-48'>
            {/* Search & Filter Section */}
            <section className='flex justify-between items-center w-full px-5 border-y border-gray-700 py-6'>
                <Input search={search} handleSearchChange={handleSearchChange} />
            </section>

            {/* Games Section */}
            <section className='grid grid-cols-12 gap-2 p-5 w-full'>
                {Object.entries(validGames).length > 0 ? (
                    Object.entries(validGames).map(([key, gameData]) => (
                        <GameOption key={key} keyName={key} gameData={gameData} handleClick={handleClick} />
                    ))
                ) : (
                    <div className='col-span-12 py-10'>
                        <h2 className='text-gray-400 w-full text-center'>No games found</h2>
                    </div>
                )}
            </section>
        </div>
    )
}

export default RootPage
