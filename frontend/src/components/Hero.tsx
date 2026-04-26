import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-petrol">
            {/* Main Background Image */}
            <div 
                className="absolute inset-0 z-0 opacity-60 scale-105 animate-subtle-zoom"
                style={{
                    backgroundImage: "url('/hero-aerial.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Geometric Overlays */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-petrol/40 backdrop-blur-[2px] skew-x-[-12deg] -translate-x-1/4"></div>
                <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-safety-orange/10 skew-y-[-6deg] translate-y-1/2"></div>
                <div className="absolute top-1/4 -right-10 w-20 h-20 bg-safety-orange rotate-45 opacity-20"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="lg:grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-safety-orange/20 border border-safety-orange/30 px-4 py-1.5 rounded-full">
                            <span className="w-2 h-2 bg-safety-orange rounded-full animate-pulse"></span>
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Global Logistics Solutions</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                            <span className="block">FLEXIBLE</span>
                            <span className="block text-safety-orange">LOGISTICS</span>
                            <span className="block opacity-90 italic">SOLUTIONS.</span>
                        </h1>
                        
                        <p className="max-w-2xl text-xl text-gray-100 font-medium leading-relaxed border-l-4 border-safety-orange pl-6 py-2">
                            Specialized in chemical transport and industrial supply chain management across Qatar and beyond. Reliability at every scale.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/#contact" className="bg-safety-orange text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white hover:text-petrol transition-all shadow-2xl shadow-safety-orange/30 group">
                                Start Your Project
                                <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">→</span>
                            </Link>
                            <Link href="/#services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white hover:text-petrol transition-all">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-safety-orange via-petrol to-transparent"></div>
        </div>
    );
}
