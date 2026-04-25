import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative min-h-[90vh] lg:min-h-[80vh] flex items-center overflow-hidden">
            {/* Background Image with Enhanced Mobile Overlay */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/hero bg/blue_trailer_corniche.png"
                    alt="Alnas Transportation Blue Trailer at Qatar Corniche"
                    fill
                    className="object-cover object-[65%_center] lg:object-center"
                    priority
                />
                {/* Mobile-optimized gradient: ensures text readability while showing the truck on the right */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/40 lg:to-transparent z-10" />
            </div>



            <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 w-full">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 lg:text-left text-center">
                        <div className="inline-block lg:block">
                            <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl lg:text-6xl border-royal lg:border-l-4 lg:pl-6 mb-4">
                                <span className="block mb-2 drop-shadow-md">Reliable Logistics &</span>
                                <span className="block text-royal-light drop-shadow-md">Chemical Transport</span>
                            </h1>
                            {/* Decorative underline for mobile instead of side border */}
                            <div className="h-1 w-20 bg-royal mx-auto lg:hidden rounded-full mb-8"></div>
                        </div>
                        
                        <p className="mt-6 text-base sm:text-lg text-gray-100 sm:text-xl sm:max-w-xl sm:mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-sm">
                            With over 15+ years of excellence in Qatar, AL NAS TRANSPORTING W.L.L delivers precision. Specialized in industrial goods and chemical transport with dedicated authority passes.
                        </p>
                        
                        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                            <Link href="/#contact" scroll={true} className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-royal hover:bg-royal-light transition-all shadow-2xl shadow-royal/40 hover:-translate-y-1 active:scale-95">
                                Get a Quote
                            </Link>
                            <Link href="/#services" className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/40 text-lg font-bold rounded-xl text-white backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95">
                                Our Fleet
                            </Link>
                        </div>
                    </div>
                    
                    {/* Hero Info Card - Hidden on small mobile to save space, shown on tablets and up */}
                    <div className="hidden sm:block lg:col-span-5 mt-16 lg:mt-0">
                        <div className="relative mx-auto w-full max-w-md">
                            <div className="relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-500">
                                <div className="space-y-6 text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-royal/30 border border-royal/40 mb-2 shadow-inner">
                                        <span className="text-4xl font-bold text-white">15+</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">Years of Trust</h3>
                                        <p className="text-gray-300 mt-2 font-medium">Serving Qatar's leading industrial sectors with safety and reliability.</p>
                                    </div>
                                    <div className="pt-6 border-t border-white/10">
                                        <div className="flex justify-around text-white">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">100%</div>
                                                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Safety</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">24/7</div>
                                                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Support</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator for Mobile */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 lg:hidden animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/60 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}


