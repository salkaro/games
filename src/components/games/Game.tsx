"use client";

// External Imports
import { useState } from 'react'

/**
 * This function generates a random math question, it includes addition, subtraction, multiplication, and division.
 */
function generateQuestion() {
    const operators = ['+', '-', 'x', '÷'];
    let num1 = Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9
    let num2 = Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let answer: number;

    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case 'x':
            answer = num1 * num2;
            break;
        case '÷':
            // num2 must be between 1 and 9
            num2 = Math.floor(Math.random() * 9) + 1;

            // Ensure that num1 is a multiple of num2 and num1 is still a single digit
            // Generate num1 to be a multiple of num2, but ensure it's <= 9
            num1 = num2 * (Math.floor(Math.random() * 9) + 1);

            // If num1 exceeds 9, ensure it becomes a valid number (adjust num1 by reducing the multiplier if necessary)
            if (num1 > 9) {
                const maxMultiplier = Math.floor(9 / num2); // Max multiplier to keep num1 <= 9
                num1 = num2 * Math.floor(Math.random() * maxMultiplier) + 1; // Adjust num1 to be valid
            }

            answer = num1 / num2;
            break;
        default:
            throw new Error("Invalid operator");
    }

    // Select randomly between num1 and num2 to be removed
    const removedNumber = Math.random() < 0.5 ? 1 : 2;

    // If removed number is a multi-digit number (in case of division), swap it with the other number
    if (removedNumber === 1 && num1 >= 10) {
        [num1, num2] = [num2, num1]; // Swap num1 and num2
    } else if (removedNumber === 2 && num2 >= 10) {
        [num1, num2] = [num2, num1]; // Swap num1 and num2
    }

    return { num1, operator, num2, answer, removedNumber };
}


interface GameProps {
    score: number;
    running: boolean;
    setScore(score: number): void;
}

const Game: React.FC<GameProps> = ({ score, running, setScore }) => {
    const [question, setQuestion] = useState<{ num1: number, operator: string, num2: number, answer: number, removedNumber: number }>(generateQuestion());

    function handleCheck(value: number) {
        if (!question) return;
        const operator = question.operator;

        let input1 = question.num1;
        let input2 = question.num2;
        if (question.removedNumber === 1) {
            input1 = value;
        } else {
            input2 = value;
        }

        switch (operator) {
            case '+':
                if (input1 + input2 === question.answer) {
                    setScore(score + 1);
                }
                break;
            case '-':
                if (input1 - input2 === question.answer) {
                    setScore(score + 1);
                }
                break;
            case 'x':
                if (input1 * input2 === question.answer) {
                    setScore(score + 1);
                }
                break;
            case '÷':
                if (input1 / input2 === question.answer) {
                    setScore(score + 1);
                }
                break;
        }

        setQuestion(generateQuestion()); // Generate a new question
    }

    return (
        <>
            {/* Question Section */}
            {running && (
                < section className='flex flex-row justify-center items-center w-full text-gray-300 text-4xl gap-3'>
                    <span>{question.removedNumber === 1 ? "__" : question.num1}</span>
                    <span>{question.operator}</span>
                    <span>{question.removedNumber === 2 ? "__" : question.num2}</span>
                    <span>=</span>
                    <span>{question.answer}</span>
                </section>
            )}

            {/* Answer Section */}
            <section className={`w-full flex justify-center ${running ? 'mt-10' : 'mt-0'}`}>
                {/* Number grid input */}
                <div className='grid grid-cols-3 gap-1 w-80'>
                    <NumberInput value={1} onClick={handleCheck} />
                    <NumberInput value={2} onClick={handleCheck} />
                    <NumberInput value={3} onClick={handleCheck} />
                    <NumberInput value={4} onClick={handleCheck} />
                    <NumberInput value={5} onClick={handleCheck} />
                    <NumberInput value={6} onClick={handleCheck} />
                    <NumberInput value={7} onClick={handleCheck} />
                    <NumberInput value={8} onClick={handleCheck} />
                    <NumberInput value={9} onClick={handleCheck} />
                </div>

            </section>
        </>
    )
}

interface NumberInputProps {
    value: number;
    onClick(value: number): void;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onClick }) => {
    return (
        <button
            type="button"
            className='col-span-1 bg-gray-600 p-8 text-lg text-white w-26 h-26 active:bg-gray-700'
            onClick={() => onClick(value)}
        >
            {value}
        </button>
    )
}


export default Game;
