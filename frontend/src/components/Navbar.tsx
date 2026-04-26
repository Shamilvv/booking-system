import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <Image
                                src="/logo.png"
                                alt="ALNAS Logo"
                                width={50}
                                height={50}
                                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                                priority
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter leading-none text-petrol">
                                    ALNAS
                                    <span className="text-safety-orange ml-1">TRANSPORT</span>
                                </span>
                                <span className="text-[10px] font-bold text-steel-light tracking-[0.3em] uppercase leading-none mt-1.5">
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
