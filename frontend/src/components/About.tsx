"use client";

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images, title, imagePosition = "object-center" }: { images: string[], title: string, imagePosition?: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (images.length <= 1 || isHovered) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [images.length, isHovered, nextSlide]);

    return (
        <div 
            className="absolute inset-0 w-full h-full bg-slate-100 group/slider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {images.map((img, idx) => (
                <div 
                    key={idx} 
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <Image
                        src={img}
                        alt={`${title} - view ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover ${imagePosition} transition-transform duration-1000 group-hover/slider:scale-105`}
                    />
                </div>
            ))}

            {/* Slider Navigation (Only if multiple images) */}
            {images.length > 1 && (
                <>
                    {/* Dark gradient at the bottom just for the dots visibility */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent z-20 pointer-events-none" />

                    <div className="absolute inset-y-0 left-0 flex items-center px-3 z-30 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-300">
                        <button 
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 text-slate-900 shadow-md hover:bg-white hover:scale-110 transition-all"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                    
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 z-30 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-300">
                        <button 
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 text-slate-900 shadow-md hover:bg-white hover:scale-110 transition-all"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
                        {images.map((_, idx) => (
                            <button 
                                key={idx}
                                onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                                className={`h-1.5 transition-all duration-300 rounded-full shadow-sm ${
                                    idx === currentIndex ? 'w-6 sm:w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
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
            description: 'Fast and reliable for medium-sized deliveries. Perfect for city transport and fast-paced logistics operations.',
            images: [
                '/3TON/3ton.jpeg'
            ]
        },
        {
            title: '7 Ton Truck',
            description: 'Heavy hauling capability for industrial needs. Engineered for larger loads, robust performance, and secure transport.',
            images: [
                '/7TON/7ton.jpeg'
            ]
        },
        {
            title: 'Flatbed Trailer',
            description: 'Highly versatile empty bed trailer explicitly designed for safely transporting oversized, irregular, and exceptionally heavy equipment.',
            images: [
                '/TRAILER 2/trailer.jpeg',
                '/TRAILER 2/WhatsApp Image 2026-04-25 at 3.35.45 PM.jpeg',
                '/TRAILER 2/WhatsApp Image 2026-04-25 at 3.35.45 PM (1).jpeg'
            ]
        },
        {
            title: 'Green Trailer Series',
            description: 'Specialized fleet handling bulk transport and large-scale cargo. Built tough for the most demanding delivery requirements.',
            images: [
                '/TRAILER 1/WhatsApp Image 2026-04-18 at 1.39.49 PM.jpeg',
                '/TRAILER 1/WhatsApp Image 2026-04-18 at 1.39.49 PM (1).jpeg',
                '/TRAILER 1/WhatsApp Image 2026-04-18 at 1.39.49 PM (2).jpeg'
            ]
        }
    ];

    return (
        <div id="about" className="py-20 sm:py-24 bg-zinc-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-royal text-xs sm:text-sm font-bold tracking-[0.15em] uppercase mb-4 border border-blue-100 shadow-sm">
                        Alnas Fleet Gallery
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                        Premium Vehicles for<br className="hidden sm:block" /> Every Challenge
                    </h2>
                    <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 mx-auto leading-relaxed">
                        Discover our versatile fleet designed to handle everything from quick city deliveries to massive industrial cargo. Reliable, secure, and ready to roll.
                    </p>
                </div>
                
                {/* Fleet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {fleet.map((vehicle, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-500"
                        >
                            {/* Image Section */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                                <ImageSlider images={vehicle.images} title={vehicle.title} imagePosition={vehicle.imagePosition} />
                            </div>
                            
                            {/* Details Section */}
                            <div className="p-6 sm:p-8 flex flex-col grow">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="h-1 w-8 bg-royal rounded-full"></div>
                                    <span className="text-royal font-bold tracking-widest text-xs uppercase">
                                        Class {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                                    {vehicle.title}
                                </h3>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                    {vehicle.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
