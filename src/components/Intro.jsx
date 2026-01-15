import React from "react";

function Intro() {
    return (
        <div
            className="p-4 bg-blue-500 text-white"
            style={{ width: '100%', textAlign: 'center' }}
        >
            <h1 style={{ textAlign: 'center' }}>Emanuel Feria</h1>
            <p style={{ textAlign: 'center' }}>Software Engineer</p>
            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
            <img className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Erin Lindford" />
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg font-semibold text-black">Erin Lindford</p>
                <p className="font-medium text-gray-500">Product Engineer</p>
                </div>
                <button className="rounded-md border border-purple-200 px-4 py-1 text-sm font-medium text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
                Message
                </button>
                </div>
                    </div>
        </div>
    )
}

export default Intro;