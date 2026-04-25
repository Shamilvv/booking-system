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
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-royal/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-royal text-sm font-bold tracking-[0.15em] uppercase mb-4 border border-blue-100 shadow-sm">
                        Our Credentials
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-steel tracking-tight mb-4">
                        Certified for <span className="text-royal">Excellence</span>
                    </h2>
                    <p className="mt-4 text-lg text-steel-light max-w-2xl mx-auto font-light leading-relaxed">
                        We hold the highest industry standards, ensuring safe, compliant, and reliable transportation across all major industrial zones in Qatar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {credentials.map((section, index) => (
                        <div 
                            key={index}
                            className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                                <section.icon className="w-32 h-32 text-royal" />
                            </div>
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 text-royal group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                    <section.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-steel mb-6">{section.title}</h3>
                                
                                <ul className="space-y-4">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-royal shrink-0 mr-3 mt-0.5" />
                                            <span className="text-steel-light font-medium">{item}</span>
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
