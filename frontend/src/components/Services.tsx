import { Truck, Package, ShieldCheck, Zap } from 'lucide-react';

const services = [
    {
        title: 'LIGHT TO MEDIUM TRUCKS',
        description: '3 Ton, 5 Ton, and 7 Ton trucks for quick and safe deliveries across the region.',
        icon: Truck,
        tag: 'Regional'
    },
    {
        title: 'HEAVY DUTY TRAILERS',
        description: 'Specialized trailers designed for large-scale industrial transports and bulk goods.',
        icon: Package,
        tag: 'Industrial'
    },
    {
        title: 'SPECIALIZED BOOM TRUCKS',
        description: 'Featuring 12 ton boom trucks for heavy lifting and transport combined. Ideal for construction sites.',
        icon: Zap,
        tag: 'Construction'
    },
    {
        title: 'CHEMICAL TRANSPORT',
        description: 'Certified transport with special passes for safely moving hazardous and chemical materials.',
        icon: ShieldCheck,
        tag: 'Certified'
    },
];

export default function Services() {
    return (
        <div id="services" className="py-16 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-50 skew-x-[-10deg] translate-x-1/2 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
                    <div className="lg:col-span-8">
                        <h2 className="text-safety-orange font-black uppercase tracking-[0.3em] text-sm mb-4">Our Fleet & Expertise</h2>
                        <p className="text-4xl md:text-6xl font-black text-petrol leading-tight tracking-tighter">
                            COMPREHENSIVE <br />
                            <span className="text-gray-400">TRANSPORT SOLUTIONS.</span>
                        </p>
                    </div>
                    <div className="lg:col-span-4 pb-2">
                        <p className="text-steel-light text-lg font-medium border-l-2 border-gray-200 pl-6">
                            From raw materials to specialized chemicals, we have the right vehicle for every job with all necessary permits.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white border border-gray-100 p-10 hover:border-safety-orange transition-all duration-500 hover:shadow-2xl hover:shadow-petrol/5">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 group-hover:bg-safety-orange/5 transition-colors -z-10 clip-path-slant"></div>

                            <div className="mb-8 relative inline-block">
                                <service.icon className="h-12 w-12 text-safety-orange" strokeWidth={1.5} />
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-petrol/5 rounded-full group-hover:bg-safety-orange/20 transition-all"></div>
                            </div>

                            <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{service.tag}</span>
                            <h3 className="text-xl font-black text-petrol tracking-tight mb-4 group-hover:text-safety-orange transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-steel-light leading-relaxed font-medium">
                                {service.description}
                            </p>

                            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-xs font-black uppercase tracking-widest text-petrol group-hover:text-safety-orange transition-all cursor-pointer">
                                Learn More
                                <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
