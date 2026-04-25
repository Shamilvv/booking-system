import { Truck, Package, ShieldCheck, Zap } from 'lucide-react';

const services = [
    {
        title: 'Light to Medium Trucks',
        description: '3 Ton, 5 Ton, and 7 Ton trucks for quick and safe deliveries across the region.',
        icon: Truck,
    },
    {
        title: 'Heavy Duty Trailers',
        description: 'Specialized trailers designed for large-scale industrial transports and bulk goods.',
        icon: Package,
    },
    {
        title: 'Specialized Boom Trucks',
        description: 'Featuring 12 ton boom trucks for heavy lifting and transport combined. Ideal for construction sites and heavy machinery.',
        icon: Zap,
    },
    {
        title: 'Chemical Transport',
        description: 'Certified transport with special passes for safely moving hazardous and chemical materials.',
        icon: ShieldCheck,
    },
];

export default function Services() {
    return (
        <div id="services" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-royal tracking-wide uppercase">Our Fleet & Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-steel sm:text-4xl">
                        Comprehensive Transport Solutions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-steel-light mx-auto">
                        From raw materials to specialized chemicals, we have the right vehicle for every job with all necessary permits.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <div key={index} className="pt-6">
                                <div className="flow-root bg-white rounded-xl shadow-md pb-8 px-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 bg-royal rounded-md shadow-lg shadow-royal/40">
                                                <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-xl font-bold text-steel tracking-tight">{service.title}</h3>
                                        <p className="mt-4 text-base text-steel-light leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
