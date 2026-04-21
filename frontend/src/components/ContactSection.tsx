import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="relative py-32 bg-slate-900 overflow-hidden isolate">
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3 drop-shadow-sm">Reach Out To Us</h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Location</span>
                    </p>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
                    <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Whether you need immediate logistics assistance or want to visit our offices, our dedicated team is ready to deliver excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                    {/* Contact Details Cards */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                                <MapPin className="h-24 w-24 text-blue-400" />
                            </div>
                            <div className="relative z-10">
                                <div className="h-14 w-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20 shadow-lg">
                                    <MapPin className="h-7 w-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Our Office</h3>
                                <p className="text-slate-300 font-light leading-relaxed">Al Mansoura, Doha<br />State of Qatar</p>
                            </div>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                                <Phone className="h-24 w-24 text-blue-400" />
                            </div>
                            <div className="relative z-10">
                                <div className="h-14 w-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20 shadow-lg">
                                    <Phone className="h-7 w-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Contact Numbers</h3>
                                <div className="space-y-2 text-slate-300 font-light">
                                    <p className="flex items-center"><span className="text-blue-400 mr-2 text-sm font-semibold">Hotline:</span> +974 30395678</p>
                                    <p className="flex items-center"><span className="text-indigo-400 mr-2 text-sm font-semibold">Opers:</span> +974 66676657</p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                                <Mail className="h-24 w-24 text-blue-400" />
                            </div>
                            <div className="relative z-10">
                                <div className="h-14 w-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20 shadow-lg">
                                    <Mail className="h-7 w-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Email Address</h3>
                                <a href="mailto:alnastransports@gmail.com" className="text-blue-300 font-light hover:text-white transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left break-all">
                                    alnastransports@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                                <Clock className="h-24 w-24 text-blue-400" />
                            </div>
                            <div className="relative z-10">
                                <div className="h-14 w-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20 shadow-lg">
                                    <Clock className="h-7 w-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Working Hours</h3>
                                <p className="text-slate-300 font-light leading-relaxed">
                                    <span className="block text-white font-medium mb-1">Sat - Thu</span>
                                    8:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Location Panel */}
                    <div className="lg:col-span-2 h-full min-h-[400px]">
                        <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-slate-800">
                            {/* Realistic Doha Map/Cityscape Image Placeholder */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572224523315-77983637537b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-40 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-60"></div>
                            
                            {/* Gradients to blend map with dark theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"></div>
                            
                            <div className="relative h-full flex flex-col justify-end p-8 sm:p-10 text-white z-10">
                                <div className="mb-auto self-end">
                                    <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-widest border border-white/20 text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse" />
                                        Qatar HQ
                                    </div>
                                </div>

                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/40 mb-6 backdrop-blur-md border border-white/10">
                                        <MapPin className="h-8 w-8 text-white animate-bounce" style={{ animationDuration: '2s' }} />
                                    </div>
                                    <h3 className="text-3xl font-extrabold mb-3 tracking-tight text-white drop-shadow-md">Based in Doha</h3>
                                    <p className="text-slate-300 font-light mb-6 text-sm leading-relaxed max-w-sm drop-shadow">
                                        Strategically positioned to serve all industrial zones and sea ports across the State of Qatar with unparalleled efficiency and rapid response.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
