// Local Imports
import LayoutGames from "@/components/layout/LayoutGames";
import QuickMathsGame from "@/components/games/QuickMathsGame";

// External Imports
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quick Maths Game - Salkaro",
    description: "Challenge your math skills with the Quick Maths Game! Perfect for all ages, this fast-paced game tests your mental math abilities in a fun and engaging way. Improve your calculation speed and accuracy while having fun. Play now on Salkaro!",
    openGraph: {
        title: 'Quick Maths Game - Salkaro',
        description: 'Challenge your math skills with the Quick Maths Game! Perfect for all ages, this fast-paced game tests your mental math abilities in a fun and engaging way. Improve your calculation speed and accuracy while having fun. Play now on Salkaro!',
        url: "https://isitdown.salkaro.com",
        images: [
            {
                url: "https://i.imgur.com/nwe5xUg.png",
                width: 2496,
                height: 1221,
                alt: "Quick Maths Game - Salkaro",
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


export default function QuickMaths() {
    return (
        <LayoutGames title="Quick Maths Game" description="Test your maths skills with this fun game.">
            <QuickMathsGame />
        </LayoutGames>
    );
}




