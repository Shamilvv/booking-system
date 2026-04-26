import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
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
                                <span className="text-sm xs:text-base sm:text-xl md:text-2xl font-black tracking-tighter leading-tight sm:leading-none text-petrol">
                                    AL NAS
                                    <span className="text-safety-orange ml-1">TRANSPORTING W.L.L</span>
                                </span>
                                <span className="text-[8px] sm:text-[10px] font-bold text-steel-light tracking-[0.2em] sm:tracking-[0.3em] uppercase leading-none mt-1 sm:mt-1.5">
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
                </div>
            </div>
        </nav>
    );
}
