import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-petrol">
            {/* Main Background Image */}
            <div 
                className="absolute inset-0 z-0 opacity-30 scale-105 animate-subtle-zoom"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Geometric Overlays for text readability */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-petrol via-petrol/90 to-transparent"></div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-safety-orange/10 blur-[120px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-safety-orange/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="lg:grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-8">
                        <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full shadow-2xl">
                            <span className="w-2.5 h-2.5 bg-safety-orange rounded-full animate-pulse shadow-[0_0_12px_rgba(37,99,235,0.8)]"></span>
                            <span className="text-white text-xs font-black uppercase tracking-[0.2em]">Global Logistics Solutions</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl">
                            <span className="block">FLEXIBLE</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-safety-orange to-safety-orange-light">LOGISTICS</span>
                            <span className="block opacity-90 italic">SOLUTIONS.</span>
                        </h1>
                        
                        <p className="max-w-2xl text-lg md:text-xl text-slate-300 font-medium leading-relaxed border-l-4 border-safety-orange pl-6 py-2 drop-shadow-md">
                            Specialized in chemical transport and industrial supply chain management across Qatar and beyond. Reliability at every scale.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-6">
                            <Link href="/#contact" className="bg-safety-orange text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-petrol transition-all shadow-[0_8px_30px_-4px_rgba(37,99,235,0.5)] hover:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.4)] group flex items-center">
                                Start Your Project
                                <span className="inline-block ml-3 transition-transform group-hover:translate-x-2">→</span>
                            </Link>
                            <Link href="/#services" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-safety-orange via-safety-orange-light to-transparent"></div>
        </div>
    );
}
