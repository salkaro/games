"use client";

// Local Imports
import Game from "./Game";
import { getCachedData, setCachedData } from "@/utils/cache-helpers";

// External Imports
import { useEffect, useState } from "react";

const QuickMathsGame = () => {
    const cacheKey = 'quick-maths-scores';
    const gameLength = 30;
    const [score, setScore] = useState<number>(0);
    const [scores, setScores] = useState<number[]>([]);
    const [timeLeft, setTimeLeft] = useState<number>(gameLength);
    const [running, setRunning] = useState<boolean>(false); // State to track if the game is running

    // Load the cached scores from localStorage when the component mounts
    useEffect(() => {
        const cachedScores = getCachedData(cacheKey);
        if (cachedScores) {
            setScores(cachedScores.data);
        }
    }, []);

    // Save the scores to localStorage whenever the scores array changes
    useEffect(() => {
        if (scores.length > 0) {
            setCachedData(cacheKey, scores);
        }
    }, [scores]);

    useEffect(() => {
        const handleGameEnd = () => {
            setScores((prevScores) => [...prevScores, score]); // Add the current score to the scores list
            setRunning(false); // Stop the game
        };

        let timer: NodeJS.Timeout;

        if (running && timeLeft > 0) {
            // Start the timer
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0 && running) {
            // Only add the score if it's the first time the game ends
            handleGameEnd()
            setRunning(false); // Stop the game when time reaches 0
        }

        // Cleanup interval on unmount or when timeLeft or running changes
        return () => clearInterval(timer);
    }, [running, timeLeft, score]);

    const startGame = () => {
        setScore(0);
        setTimeLeft(gameLength);
        setRunning(true);
    };


    return (
        <div className="flex flex-col items-center justify-center">

            { /* Display Current Score Section */}
            {running && (
                <section className="max-w-md flex flex-row justify-between w-full mb-10">
                    <h2 className="text-gray-300 font-bold text-2xl text-center mb-4">Score {score}</h2>
                    <h2 className="text-gray-300 font-bold text-2xl text-center mb-4">Time {timeLeft}s</h2>
                </section>
            )}

            <div className="relative flex flex-col items-center justify-center">
                {/* Show Start Game Button when not running */}
                {!running && (
                    <section className="absolute top-0 flex flex-col justify-center items-center w-full h-full bg-black/50">
                        <button
                            className="hover:cursor-pointer bg-gray-800 text-gray-300 font-bold p-4 rounded-lg shadow-lg"
                            onClick={startGame}
                        >
                            Start Game
                        </button>
                    </section>
                )}

                {/* Game Section */}
                <section className="max-w-xl">
                    <Game score={score} setScore={setScore} running={running} />
                </section>
            </div>


            {/* Scores Section */}
            {!running && scores.length > 0 && (
                <section className="mt-48 w-full">
                    <Scores scores={scores} />
                </section>
            )}
        </div>
    )
}


interface ScoresProps {
    scores: number[];
}

const Scores: React.FC<ScoresProps> = ({ scores }) => {
    // Sort scores in descending order (highest first)
    const sortedScores = [...scores].sort((a, b) => b - a);

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto max-h-[600px] overflow-y-auto scrollbar-hide">
            <h2 className="text-gray-300 font-bold text-3xl text-center mb-4">🏆 High Scores</h2>
            <ul className="space-y-2">
                {sortedScores.map((score, index) => (
                    <li
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${index === 0 ? "bg-yellow-500 text-black font-bold" : "bg-gray-700 text-gray-300"
                            }`}
                    >
                        <span className="font-semibold">#{index + 1}</span>
                        <span className="text-xl">{score}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuickMathsGame;
