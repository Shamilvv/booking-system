import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="ALNAS TRANSPORTATION Logo"
                                width={180}
                                height={60}
                                className="h-14 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-steel font-medium hover:text-royal transition-colors">Home</Link>
                        <Link href="/#services" scroll={true} className="text-steel font-medium hover:text-royal transition-colors">Services</Link>
                        <Link href="/booking" className="text-steel font-medium hover:text-royal transition-colors">Book Now</Link>
                        <Link href="/#contact" scroll={true} className="text-steel font-medium hover:text-royal transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
