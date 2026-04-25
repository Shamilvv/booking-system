import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-white pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden mt-10">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="mt-10 lg:mt-0 lg:col-span-6 lg:text-left text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-steel sm:text-5xl border-l-4 border-royal pl-4">
                            <span className="block mb-2">Reliable Logistics &</span>
                            <span className="block text-royal">Chemical Transport</span>
                        </h1>
                        <p className="mt-4 text-base text-steel-light sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                            With over 15+ years of experience in Qatar, AL NAS TRANSPORTING W.L.L delivers excellence. We handle industrial goods, liquid assets, and specialized chemical transports with dedicated passes.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/#contact" scroll={true} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal hover:bg-royal-light transition-all md:py-4 md:text-lg md:px-10 shadow-lg shadow-royal/30 hover:shadow-royal/50 hover:-translate-y-0.5">
                                Contact Now
                            </Link>
                            <Link href="/#services" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-steel bg-white hover:bg-gray-50 transition-colors md:py-4 md:text-lg md:px-10">
                                View Fleet
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden bg-gradient-to-br from-royal to-blue-300 aspect-video lg:aspect-square flex flex-col items-center justify-center p-8 transform transition-transform hover:scale-105 duration-500">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
                            <div className="z-10 text-white text-center space-y-4">
                                <span className="block text-7xl font-extrabold tracking-tight">15+</span>
                                <span className="block text-2xl font-medium tracking-wide">Years in Qatar</span>
                                <div className="h-1 w-16 bg-white/50 mx-auto rounded-full mt-4"></div>
                                <p className="mt-4 text-blue-50">Trusted by top plants & industries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
