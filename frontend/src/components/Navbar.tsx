"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
                            <Image
                                src="/logo.png"
                                alt="ALNAS Logo"
                                width={50}
                                height={50}
                                className="h-10 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
                                priority
                            />
                            <div className="flex flex-col">
                                <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-black tracking-[calc(-0.04em)] leading-tight text-petrol">
                                    AL NAS
                                    <span className="text-safety-orange ml-1">TRANSPORTING W.L.L</span>
                                </span>
                                <span className="text-[9px] sm:text-[10px] font-bold text-steel-light tracking-[0.1em] sm:tracking-[0.3em] uppercase leading-none mt-1 sm:mt-1.5">
                                    Moving Excellence
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-10 items-center">
                        <Link href="/" className="text-petrol font-bold uppercase tracking-wider text-sm hover:text-safety-orange transition-colors">Home</Link>
                        <Link href="/#about" scroll={true} className="text-petrol font-bold uppercase tracking-wider text-sm hover:text-safety-orange transition-colors">About Us</Link>
                        <Link href="/#services" scroll={true} className="text-petrol font-bold uppercase tracking-wider text-sm hover:text-safety-orange transition-colors">Services</Link>
                        <Link href="/#contact" scroll={true} className="bg-safety-orange text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-petrol transition-all shadow-lg shadow-safety-orange/20 hover:shadow-petrol/20">
                            Connect With Us
                        </Link>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-petrol hover:text-safety-orange focus:outline-none transition-colors"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
                        <Link 
                            href="/" 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-petrol font-bold uppercase tracking-wider text-sm hover:text-safety-orange transition-colors"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/#about" 
                            scroll={true} 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-petrol font-bold uppercase tracking-wider text-sm hover:text-safety-orange transition-colors"
                        >
                            About Us
                        </Link>
                        <Link 
                            href="/#services" 
                            scroll={true} 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-petrol font-bold uppercase tracking-wider text-sm hover:text-safety-orange transition-colors"
                        >
                            Services
                        </Link>
                        <Link 
                            href="/#contact" 
                            scroll={true} 
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-safety-orange text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-petrol transition-all shadow-lg shadow-safety-orange/20 hover:shadow-petrol/20 text-center w-max mt-4"
                        >
                            Connect With Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
