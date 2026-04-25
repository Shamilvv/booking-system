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
                        <Link href="/" className="flex items-center space-x-3 mb-6 group">
                            <div className="bg-white p-1.5 rounded-lg shadow-md transition-transform group-hover:scale-105">
                                <Image src="/logo.png" alt="ALNAS Logo" width={40} height={40} className="h-10 w-auto" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tighter leading-none">
                                    <span className="text-white">ALNAS</span>
                                    <span className="text-royal-light ml-1">TRANSPORTING W.L.L</span>
                                </span>
                                <span className="text-[9px] font-bold text-gray-400 tracking-[0.15em] uppercase mt-1">
                                    Moving Excellence
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed mb-2">
                            ALNAS TRANSPORTING W.L.L has been providing top-tier logistics and specialized chemical transportation services in Qatar for over 15 years.
                        </p>
                        <p className="text-gray-400 text-xs font-semibold">
                            CPR NO: 47256
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
                                <Link href="/#contact" scroll={true} className="text-gray-300 hover:text-white transition-colors">Enquiry</Link>
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
                                    href="mailto:alnasqatar@yahoo.com"
                                    className="text-gray-300 hover:text-white transition-colors break-all"
                                >
                                    alnasqatar@yahoo.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-royal-light mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">
                                    Street 330, Building No:57, Zone:25<br />
                                    Office No:10, 4th Floor Buzwair Building<br />
                                    Near Almeera, Doha, Qatar
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} ALNAS TRANSPORTING W.L.L. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
