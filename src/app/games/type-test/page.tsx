// Local Imports
import LayoutGames from "@/components/layout/LayoutGames";
import TypeTestGame from "@/components/games/type-test/TypeTestGame";

// External Imports
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Speed Type Test - Salkaro",
    description: "",
    openGraph: {
        title: 'Speed Type Test - Salkaro',
        description: 'Challenge your math skills with the Quick Maths Game! Perfect for all ages, this fast-paced game tests your mental math abilities in a fun and engaging way. Improve your calculation speed and accuracy while having fun. Play now on Salkaro!',
        url: "https://games.salkaro.com/type-test",
        images: [
            {
                url: "https://i.imgur.com/nwe5xUg.png",
                width: 2496,
                height: 1221,
                alt: "Speed Type Test - Salkaro",
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};


export default function TypeTest() {
    return (
        <LayoutGames title="Typing Speed Test" description="Test your typing speed with this fun game.">
            <TypeTestGame />
        </LayoutGames>
    );
}




