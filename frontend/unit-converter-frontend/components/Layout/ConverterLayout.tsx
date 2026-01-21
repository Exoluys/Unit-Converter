"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Unit {
    value: string,
    label: string
}

interface UnitProps {
    title: string,
    units: Unit[]
}

const ConverterLayout = ({ title, units }: UnitProps) => {
    const [value, setValue] = useState("");
    const [fromUnit, setFromUnit] = useState<string>(units[0]?.value || "");
    const [toUnit, setToUnit] = useState<string>(units[1]?.value || units[0]?.value || "");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`http://localhost:8080/convert/${title}`, {
                value: parseFloat(value),
                fromUnit,
                toUnit
            });

            router.push(`/success?result=${res.data}&from=${fromUnit}&to=${toUnit}`);
        } catch (error) {
            console.error("Conversion error:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-6">
            <form className="flex flex-col" onSubmit={submitHandler}>
                <label className="text-sm font-medium text-gray-700 mb-2">
                    Enter Value
                </label>
                <input
                    type="number"
                    value={value}
                    className="p-3 border border-gray-300 rounded-lg mb-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="0"
                    step="any"
                />

                <label className="text-sm font-medium text-gray-700 mb-2">
                    From
                </label>
                <select
                    value={fromUnit}
                    className="p-3 border border-gray-300 rounded-lg cursor-pointer mb-4 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    onChange={(e) => setFromUnit(e.target.value)}
                >
                    {units.map((unit) => (
                        <option key={unit.value} value={unit.value}>{unit.label}</option>
                    ))}
                </select>

                <label className="text-sm font-medium text-gray-700 mb-2">
                    To
                </label>
                <select
                    value={toUnit}
                    className="p-3 border border-gray-300 rounded-lg cursor-pointer mb-6 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    onChange={(e) => setToUnit(e.target.value)}
                >
                    {units.map((unit) => (
                        <option key={unit.value} value={unit.value}>{unit.label}</option>
                    ))}
                </select>

                <button
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Converting..." : "Convert"}
                </button>
            </form>
        </div>
    )
}

export default ConverterLayout;