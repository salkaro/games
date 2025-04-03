// Local Imports
import RootPage from "@/components/Page/RootPage";

// External Imports
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Is This Website Down? Check Website Status Instantly - Salkaro",
    description: "Quickly check if a website is down or experiencing issues. Enter a URL and get real-time uptime status. Free and easy-to-use website monitoring tool.",
    openGraph: {
        title: 'Is This Website Down? Check Website Status Instantly - Salkaro',
        description: 'Quickly check if a website is down or experiencing issues. Enter a URL and get real-time uptime status. Free and easy-to-use website monitoring tool.',
        url: "https://isitdown.salkaro.com",
        images: [
            {
                url: "https://i.imgur.com/yYl4AE0.png",
                width: 2496,
                height: 1221,
                alt: "Is This Website Down? Check Website Status Instantly - Salkaro",
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


export default function Home() {
    return (
        <div className="min-h-screen bg-[#1e1e1e] sm:mx-10 md:mx-20 lg:mx-40 xl:mx-70 2xl:mx-112 flex flex-col items-center">
            {/* Title Section */}
            <section className="text-center py-16 w-full">
                <h1 className="text-gray-300 font-semibold text-6xl">Salkaro Games</h1>
                <p className="text-gray-400">Explore a range of fun random games.</p>
            </section>

            <RootPage />
        </div>
    );
}
