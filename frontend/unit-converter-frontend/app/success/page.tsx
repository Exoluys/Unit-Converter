"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

function SuccessContent() {
    const searchParams = useSearchParams();
    const result = searchParams.get('result');
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-black">
            <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-800">Conversion Successful!</h2>

                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                    <p className="text-3xl font-bold text-gray-800">{result || "0"}</p>
                    {from && to && (
                        <p className="text-sm text-gray-500 mt-2">{from} → {to}</p>
                    )}
                </div>

                <Link href="/" className="mt-6 block w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition">
                    New Conversion
                </Link>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Loading...
            </div>
        }>
            <SuccessContent />
        </Suspense>
    );
}