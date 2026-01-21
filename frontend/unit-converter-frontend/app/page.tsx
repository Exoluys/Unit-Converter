"use client";

import { useState } from "react";
import Length from "./length/page";
import Weight from "./weight/page";
import Temp from "./temp/page";

const UnitConverter = () => {
    const [activeTab, setActiveTab] = useState<"Length" | "Weight" | "Temperature">("Length");

    const renderConverter = () => {
        switch (activeTab) {
            case "Length":
                return <Length />;
            case "Weight":
                return <Weight />;
            case "Temperature":
                return <Temp />;
            default:
                return <Length />;
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-6 bg-black">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-lg overflow-hidden">
                <div className="pt-6 pb-1">
                    <h2 className="text-[2.6rem] font-bold text-gray-800 text-center">
                        Unit Converter
                    </h2>
                </div>

                <div className="flex border-gray-200">
                    {(["Length", "Weight", "Temperature"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === tab
                                ? "text-gray-800 border-b-2 border-gray-800 bg-gray-50"
                                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {renderConverter()}
            </div>
        </div>
    );
}

export default UnitConverter;