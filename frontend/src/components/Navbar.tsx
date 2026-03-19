import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <Image
                                src="/logo.png"
                                alt="ALNAS Logo"
                                width={50}
                                height={50}
                                className="h-12 w-auto object-contain transition-transform group-hover:scale-110"
                                priority
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter leading-none">
                                    <span className="text-steel">ALNAS</span>
                                    <span className="text-royal ml-1">TRANSPORT</span>
                                </span>
                                <span className="text-[10px] font-bold text-steel-light tracking-[0.2em] uppercase leading-none mt-1">
                                    Moving Excellence
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-steel font-medium hover:text-royal transition-colors">Home</Link>
                        <Link href="/#services" scroll={true} className="text-steel font-medium hover:text-royal transition-colors">Services</Link>
                        <Link href="/#contact" scroll={true} className="text-steel font-medium hover:text-royal transition-colors">Enquiry</Link>
                        <Link href="/#contact" scroll={true} className="text-steel font-medium hover:text-royal transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
