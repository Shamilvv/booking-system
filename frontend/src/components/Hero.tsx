import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative min-h-[80vh] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/hero bg/hero bg.png"
                    alt="Alnas Transportation Fleet"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 lg:text-left text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl border-l-4 border-royal pl-6">
                            <span className="block mb-2">Reliable Logistics &</span>
                            <span className="block text-royal-light">Chemical Transport</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-200 sm:text-xl sm:max-w-xl sm:mx-auto lg:mx-0 leading-relaxed">
                            With over 15+ years of excellence in Qatar, AL NAS TRANSPORTING W.L.L delivers precision. Specialized in industrial goods and chemical transport with dedicated authority passes.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/#contact" scroll={true} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-royal hover:bg-royal-light transition-all shadow-xl shadow-royal/40 hover:-translate-y-1">
                                Get a Quote
                            </Link>
                            <Link href="/#services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-md text-white backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-1">
                                Our Fleet
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block lg:col-span-5">
                        <div className="relative mx-auto w-full max-w-md">
                            <div className="relative rounded-2xl p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <div className="space-y-6 text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-royal/20 border border-royal/30 mb-2">
                                        <span className="text-4xl font-bold text-white">15+</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Years of Trust</h3>
                                        <p className="text-gray-300 mt-2">Serving Qatar's leading industrial sectors with safety and reliability.</p>
                                    </div>
                                    <div className="pt-4 border-t border-white/10">
                                        <div className="flex justify-around text-white">
                                            <div className="text-center">
                                                <div className="text-xl font-bold">100%</div>
                                                <div className="text-xs uppercase tracking-wider text-gray-400">Safety</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xl font-bold">24/7</div>
                                                <div className="text-xs uppercase tracking-wider text-gray-400">Support</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

