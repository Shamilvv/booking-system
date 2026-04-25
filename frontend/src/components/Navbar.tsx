'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-slate-900/95 shadow-lg py-3' 
                : 'bg-black/30 backdrop-blur-md py-5'
        } border-b ${isScrolled ? 'border-white/5' : 'border-white/10'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <Image
                                src="/logo.png"
                                alt="ALNAS Logo"
                                width={50}
                                height={50}
                                className={`transition-all duration-300 object-contain ${
                                    isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'
                                } group-hover:scale-110`}
                                priority
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter leading-none">
                                    <span className="text-white">ALNAS</span>
                                    <span className="text-royal-light ml-1">TRANSPORTING W.L.L</span>
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase leading-none mt-1">
                                    Moving Excellence
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-white font-medium hover:text-royal-light transition-colors">Home</Link>
                        <Link href="/#about" scroll={true} className="text-white font-medium hover:text-royal-light transition-colors">About Us</Link>
                        <Link href="/#services" scroll={true} className="text-white font-medium hover:text-royal-light transition-colors">Services</Link>
                        <Link href="/#contact" scroll={true} className="text-white font-medium hover:text-royal-light transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}


