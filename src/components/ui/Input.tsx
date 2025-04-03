import React from 'react'


interface InputProps {
    search: string;
    handleSearchChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ search, handleSearchChange }) => {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search games..."
            className="px-3 py-2 text-gray-300 bg-[#1c1c1c] rounded-lg border-2 border-gray-700 focus:outline-none ring-0"
            autoFocus
            autoComplete="off"
        />
    )
}

export default Input
