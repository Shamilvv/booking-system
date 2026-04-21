"use client";

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';

// Reusable slider for the main showcase
const ImageSlider = ({ images, title, isActiveClass }: { images: string[], title: string, isActiveClass: boolean }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset slider when vehicle class changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [title]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [images.length, nextSlide]);

    return (
        <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] group/slider">
            {images.map((img, idx) => (
                <div 
                    key={idx} 
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        idx === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
                    }`}
                >
                    <Image
                        src={img}
                        alt={`${title} - image ${idx + 1}`}
                        fill
                        priority={idx === 0}
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
            ))}

            {/* Slider Navigation (Only if multiple images) */}
            {images.length > 1 && (
                <>
                    <div className="absolute inset-y-0 left-0 flex items-center px-4 z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                        <button 
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all shadow-xl"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 z-30 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                        <button 
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all shadow-xl"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Image Indicators */}
                    <div className="absolute top-6 right-8 flex space-x-3 z-30">
                        {images.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`h-1.5 transition-all duration-500 rounded-full ${
                                    idx === currentIndex ? 'w-10 bg-royal shadow-[0_0_10px_rgba(8,112,184,0.8)]' : 'w-3 bg-white/30 hover:bg-white/60'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default function About() {
    const fleet = [
        {
            title: '3 Ton Truck',
            subtitle: 'City Logistics',
            description: 'Fast, agile, and incredibly reliable for medium-sized deliveries. Engineered specifically for complex city transport, narrow streets, and fast-paced logistics operations where time is of the essence.',
            images: ['/3ton.jpeg'],
            specs: ['Payload: 3000 kg', 'City Optimized', 'GPS Tracked']
        },
        {
            title: '7 Ton Truck',
            subtitle: 'Heavy Hauling',
            description: 'Uncompromising heavy hauling capability for industrial needs. Engineered for larger loads, robust performance, and secure transport over long distances without sacrificing speed.',
            images: ['/7ton.jpeg'],
            specs: ['Payload: 7000 kg', 'Long-Haul Capable', 'Reinforced Chassis']
        },
        {
            title: 'Flatbed Trailer',
            subtitle: 'Oversized Cargo',
            description: 'Highly versatile empty bed trailer explicitly designed for safely transporting oversized, irregular, and exceptionally heavy equipment that cannot fit in standard enclosures.',
            images: ['/trailer.jpeg'],
            specs: ['Open Bed Design', 'Heavy Equipment', 'Multi-axle']
        },
        {
            title: 'Green Trailer Series',
            subtitle: 'Bulk Transport Master',
            description: 'Our most specialized fleet handling maximum bulk transport and large-scale cargo. Built exceptionally tough to meet and exceed the most demanding industrial delivery requirements.',
            images: [
                '/GREEN TRAILER/WhatsApp Image 2026-04-18 at 1.39.49 PM.jpeg',
                '/GREEN TRAILER/WhatsApp Image 2026-04-18 at 1.39.49 PM (1).jpeg',
                '/GREEN TRAILER/WhatsApp Image 2026-04-18 at 1.39.49 PM (2).jpeg'
            ],
            specs: ['Maximum Payload', 'Bulk Cargo', 'Industrial Grade']
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const activeVehicle = fleet[activeIndex];

    return (
        <div id="about" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Subtle background texture/gradient */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-royal/10 blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px]" />
            </div>

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="h-px w-12 bg-royal"></div>
                            <span className="text-royal font-bold tracking-[0.3em] text-xs sm:text-sm uppercase">
                                Alnas Automotive
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white uppercase">
                            The Fleet <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-blue-400">Showcase</span>
                        </h2>
                    </div>
                    <p className="mt-6 md:mt-0 text-gray-400 max-w-md text-sm sm:text-base leading-relaxed md:text-right">
                        Explore our world-class transportation assets. From agile city delivery trucks to massive industrial flatbeds, we have engineered a solution for every logistical challenge.
                    </p>
                </div>

                {/* Main Showcase Area */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-auto lg:h-[70vh] min-h-[600px]">
                    
                    {/* Left: Interactive Details Panel */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-royal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="relative z-10">
                            <div className="inline-flex items-center space-x-2 bg-royal/20 border border-royal/30 text-royal px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
                                <Settings className="w-3 h-3 animate-spin-slow" />
                                <span>Class 0{activeIndex + 1}</span>
                            </div>
                            
                            <h3 
                                key={`title-${activeIndex}`}
                                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 animate-[slideUp_0.5s_ease-out_forwards]"
                            >
                                {activeVehicle.title}
                            </h3>
                            <p 
                                key={`subtitle-${activeIndex}`}
                                className="text-xl text-royal font-medium tracking-wide mb-8 animate-[slideUp_0.6s_ease-out_forwards]"
                            >
                                {activeVehicle.subtitle}
                            </p>
                            
                            <p 
                                key={`desc-${activeIndex}`}
                                className="text-gray-300 leading-relaxed text-base lg:text-lg animate-[slideUp_0.7s_ease-out_forwards]"
                            >
                                {activeVehicle.description}
                            </p>

                            {/* Specs list */}
                            <div className="mt-10 space-y-4">
                                {activeVehicle.specs.map((spec, i) => (
                                    <div 
                                        key={`spec-${activeIndex}-${i}`} 
                                        className="flex items-center space-x-3 text-gray-400 animate-[fadeIn_0.8s_ease-out_forwards]"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-royal/70" />
                                        <span className="text-sm font-medium uppercase tracking-wider">{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination/Controls indicator at bottom */}
                        <div className="mt-12 lg:mt-0 flex items-center space-x-4 relative z-10">
                            <div className="text-gray-500 font-mono text-sm">
                                <span className="text-white font-bold">0{activeIndex + 1}</span> / 0{fleet.length}
                            </div>
                            <div className="flex-1 h-px bg-white/10 relative">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-royal transition-all duration-500 ease-out"
                                    style={{ width: `${((activeIndex + 1) / fleet.length) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Massive Hero Display */}
                    <div className="w-full lg:w-2/3 relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/5">
                        <ImageSlider 
                            images={activeVehicle.images} 
                            title={activeVehicle.title} 
                            isActiveClass={true} 
                        />
                        {/* Inner shadow/vignette */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none z-40" />
                    </div>

                </div>

                {/* Bottom: Thumbnail Selector */}
                <div className="mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {fleet.map((vehicle, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`group relative h-28 sm:h-36 lg:h-48 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                                    isActive 
                                        ? 'ring-2 ring-royal ring-offset-4 ring-offset-[#050505] shadow-[0_0_30px_rgba(8,112,184,0.3)] scale-100 z-10' 
                                        : 'opacity-50 hover:opacity-100 hover:scale-[1.02] scale-95'
                                }`}
                            >
                                <Image 
                                    src={vehicle.images[0]} 
                                    alt={`Select ${vehicle.title}`}
                                    fill 
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 transition-colors duration-500 ${
                                    isActive ? 'bg-gradient-to-t from-royal/80 via-black/40 to-transparent' : 'bg-black/60 group-hover:bg-black/40'
                                }`} />
                                
                                <div className="absolute bottom-4 left-4 right-4 text-left">
                                    <div className={`text-xs font-bold tracking-widest uppercase mb-1 transition-colors ${
                                        isActive ? 'text-blue-200' : 'text-gray-400'
                                    }`}>
                                        Class 0{index + 1}
                                    </div>
                                    <div className="text-white font-bold text-sm sm:text-base tracking-tight truncate drop-shadow-md">
                                        {vehicle.title}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Inline styles for custom animations used above */}
            <style jsx>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
