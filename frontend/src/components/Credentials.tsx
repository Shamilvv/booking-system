import { ShieldCheck, FileCheck, Award, CheckCircle2 } from 'lucide-react';

export default function Credentials() {
    const credentials = [
        {
            title: "Industry Passes",
            icon: ShieldCheck,
            items: [
                "RLIC QATARGAS",
                "RLIC PORT",
                "MIC",
                "QAFCO",
                "QAPCO"
            ]
        },
        {
            title: "Safety Training",
            icon: Award,
            items: [
                "QATAR GAS TRAINING",
                "QAPCO TRAINING",
                "QAFCO TRAINING"
            ]
        },
        {
            title: "Certificates & Approvals",
            icon: FileCheck,
            items: [
                "CHEMICAL HANDLING",
                "TRANSPORTATION OF DANGEROUS GOOD",
                "BASIC FIRST AID WITH CPR",
                "DEFFENSIVE TRAINING QATAR ENERGY APPROVED"
            ]
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-b border-gray-100">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-petrol/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-safety-orange/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-safety-orange/10 text-safety-orange text-xs font-black tracking-[0.2em] uppercase mb-6 border border-safety-orange/20 shadow-sm">
                        Our Credentials
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-petrol tracking-tighter mb-6 leading-none">
                        CERTIFIED FOR <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrol to-gray-400">EXCELLENCE</span>
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-steel-light max-w-2xl mx-auto font-medium leading-relaxed">
                        We hold the highest industry standards, ensuring safe, compliant, and reliable transportation across all major industrial zones in Qatar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {credentials.map((section, index) => (
                        <div 
                            key={index}
                            className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-safety-orange/50 shadow-lg hover:shadow-2xl hover:shadow-petrol/10 transition-all duration-500 hover:-translate-y-2 relative group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <section.icon className="w-32 h-32 text-petrol" />
                            </div>
                            
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-8 border border-gray-100 text-safety-orange group-hover:scale-110 group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 shadow-sm">
                                    <section.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-petrol tracking-tight mb-6 uppercase group-hover:text-safety-orange transition-colors">{section.title}</h3>
                                
                                <ul className="space-y-4">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-safety-orange shrink-0 mr-3 mt-0.5" />
                                            <span className="text-steel-light font-medium text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
