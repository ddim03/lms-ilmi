import React from "react";

export default function Wrapper({ children }) {
    return (
        <div className="pt-24 pb-10">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white text-gray-900 overflow-hidden shadow-sm sm:rounded p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
