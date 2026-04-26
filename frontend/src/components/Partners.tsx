import React from 'react';

export default function Partners() {
    return (
        <div className="bg-gray-50 py-16 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="text-petrol font-black text-2xl tracking-tighter">PARTNER<span className="text-safety-orange">ONE</span></div>
                    <div className="text-petrol font-black text-2xl tracking-tighter italic underline decoration-safety-orange">LOGI-CORP</div>
                    <div className="text-petrol font-black text-2xl tracking-tighter border-2 border-petrol px-2">STRATEGIC</div>
                    <div className="text-petrol font-black text-2xl tracking-tighter uppercase border-b-4 border-safety-orange">GlobalTrans</div>
                    <div className="text-petrol font-black text-2xl tracking-tighter">TECH<span className="bg-petrol text-white px-1">FLOW</span></div>
                </div>
            </div>
        </div>
    );
}
