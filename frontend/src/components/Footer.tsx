import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer id="contact" className="bg-steel text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                    {/* Brand & Description */}
                    <div className="col-span-1">
                        <div className="bg-white inline-block p-2 rounded-lg mb-6">
                            <Image src="/logo.png" alt="ALNAS Logo" width={150} height={50} className="h-10 w-auto" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            ALNAS TRANSPORTATION has been providing top-tier logistics and specialized chemical transportation services in Qatar for over 15 years.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 md:pl-8">
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Our Fleet</Link>
                            </li>
                            <li>
                                <Link href="/booking" className="text-gray-300 hover:text-white transition-colors">Book a Transport</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 text-royal-light mr-3 mt-0.5 flex-shrink-0" />
                                <a href="tel:+97430395678" className="text-gray-300 hover:text-white transition-colors">
                                    +974 30395678
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Mail className="h-5 w-5 text-royal-light mr-3 mt-0.5 flex-shrink-0" />
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=alnastransports@gmail.com&su=Inquiry from ALNAS Website"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    alnastransports@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-royal-light mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">Doha, State of Qatar</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} ALNAS TRANSPORTATION. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
