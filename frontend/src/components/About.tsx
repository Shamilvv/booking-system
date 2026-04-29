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
            className="absolute inset-0 w-full h-full bg-slate-50 group/slider"
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
            imagePosition: 'object-center',
            images: [
                '/3TON/3.jpeg',
                '/3TON/3ton.jpeg',
                '/3TON/WhatsApp Image 2026-04-25 at 3.38.49 PM.jpeg',
                '/3TON/WhatsApp Image 2026-04-25 at 3.38.50 PM.jpeg'
            ]
        },
        {
            title: '5 Ton Truck',
            description: 'The versatile workhorse for medium-heavy transport. Optimized for balanced load capacity and efficient regional distribution.',
            imagePosition: 'object-center',
            images: [
                '/5ton/WhatsApp Image 2026-04-28 at 7.03.49 PM.jpeg',
                '/5ton/WhatsApp Image 2026-04-28 at 7.03.49 PM (1).jpeg',
                '/5ton/WhatsApp Image 2026-04-28 at 7.03.49 PM (2).jpeg',
                '/5ton/WhatsApp Image 2026-04-28 at 7.03.49 PM (3).jpeg'
            ]
        },
        {
            title: '7 Ton Truck',
            description: 'Heavy hauling capability for industrial needs. Engineered for larger loads, robust performance, and secure transport.',
            images: [
                '/7TON/new/WhatsApp Image 2026-04-30 at 12.25.46 AM.jpeg',
                '/7TON/new/WhatsApp Image 2026-04-30 at 12.25.46 AM (1).jpeg',
                '/7TON/new/WhatsApp Image 2026-04-30 at 12.25.46 AM (2).jpeg'
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
        <div id="about" className="py-16 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -z-10"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-petrol/5 skew-x-[-12deg] translate-x-1/2 -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                
                {/* Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <div className="inline-flex items-center space-x-2 bg-safety-orange/10 border border-safety-orange/20 px-4 py-1.5 rounded-full mb-6">
                        <span className="w-2 h-2 bg-safety-orange rounded-full"></span>
                        <span className="text-petrol text-xs font-black uppercase tracking-[0.2em]">Our Fleet Gallery</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-7xl font-black text-petrol tracking-tighter leading-none mb-8">
                        PREMIUM <span className="text-safety-orange">VEHICLES</span> <br />
                        <span className="opacity-40">FOR EVERY CHALLENGE.</span>
                    </h2>
                    
                    <p className="max-w-2xl mx-auto text-lg text-steel-light font-medium leading-relaxed">
                        Discover our versatile fleet designed to handle everything from quick city deliveries to massive industrial cargo. 
                        Reliable, secure, and ready to roll across the region.
                    </p>
                </div>
                
                {/* Fleet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {fleet.map((vehicle, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col bg-white border border-gray-100 hover:border-safety-orange/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,61,76,0.1)]"
                        >
                            {/* Image Section */}
                            <div className="relative w-full aspect-[16/10] bg-gray-50 overflow-hidden">
                                <ImageSlider images={vehicle.images} title={vehicle.title} imagePosition={vehicle.imagePosition} />
                                
                                {/* Overlay Index */}
                                <div className="absolute top-6 left-6 z-40 bg-petrol text-white w-10 h-10 flex items-center justify-center font-black text-sm">
                                    0{index + 1}
                                </div>
                                
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-petrol/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                            </div>
                            
                            {/* Details Section */}
                            <div className="p-8 sm:p-10 border-t border-gray-50 relative">
                                <div className="absolute top-0 right-10 w-12 h-1 bg-safety-orange transform -translate-y-1/2"></div>
                                
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-safety-orange text-[10px] font-black uppercase tracking-[0.3em]">Commercial Fleet</span>
                                </div>
                                
                                <h3 className="text-3xl font-black text-petrol mb-4 tracking-tighter group-hover:text-safety-orange transition-colors duration-300 uppercase">
                                    {vehicle.title}
                                </h3>
                                
                                <p className="text-steel-light text-base leading-relaxed font-medium mb-8">
                                    {vehicle.description}
                                </p>
                                
                                <div className="flex items-center text-xs font-black uppercase tracking-widest text-petrol group-hover:text-safety-orange transition-all">
                                    View Specifications
                                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
