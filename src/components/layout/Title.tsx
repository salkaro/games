"use client";

import { useRouter } from "next/navigation"

interface TitleProps {
    title: string,
    description: string
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
    const router = useRouter();

    return (
        <div className="relative w-full text-center">
            {/* Title Section */}
            <section className="text-center py-16 w-full">
                <h1 className="text-gray-300 font-semibold text-6xl">{title}</h1>
                <p className="text-gray-400">{description}</p>
            </section>

            <button className="absolute top-4 left-4 text-gray-300 hover:text-gray-500 font-bold" onClick={() => router.back()}>
                Back
            </button>
        </div>
    )
}

export default Title;