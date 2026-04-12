import Image from 'next/image';

export default function About() {
    const fleet = [
        {
            title: '3 Ton Truck',
            description: 'Fast and reliable for medium-sized deliveries. Perfect for city transport and quick logistics.',
            image: '/3ton.jpeg'
        },
        {
            title: '7 Ton Truck',
            description: 'Heavy hauling capability for industrial needs. Engineered for larger loads and secure transport.',
            image: '/7ton.jpeg'
        },
        {
            title: 'Heavy Trailer',
            description: 'Specialized for bulk transport and large-scale cargo. Built for demanding delivery requirements.',
            image: '/trailer.jpeg'
        }
    ];

    return (
        <div id="about" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-royal tracking-wide uppercase">About Our Fleet</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-steel sm:text-4xl">
                        Vehicles Ready for Any Challenge
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-steel-light mx-auto">
                        Whether it's a small load or massive industrial cargo, we have the right vehicle to ensure your goods arrive safely and on time.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    {fleet.map((vehicle, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-steel mb-3">{vehicle.title}</h3>
                                    <p className="text-steel-light leading-relaxed">{vehicle.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
