import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-steel sm:text-4xl">
                        Contact & <span className="text-royal">Location</span>
                    </h2>
                    <p className="mt-4 text-steel-light max-w-2xl mx-auto">
                        Get in touch with our team for immediate logistics assistance or visit our office in Doha.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-6 transform transition-hover hover:-translate-y-1 duration-300">
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <MapPin className="h-8 w-8 text-royal" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-steel mb-2">Our Office</h3>
                                <p className="text-steel-light">Industrial Area, Doha, State of Qatar</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-6 transform transition-hover hover:-translate-y-1 duration-300">
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <Phone className="h-8 w-8 text-royal" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-steel mb-2">Phone Numbers</h3>
                                <div className="space-y-1">
                                    <p className="text-steel-light">+974 30395678 (Hotline)</p>
                                    <p className="text-steel-light">+974 55123456 (Operations)</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-6 transform transition-hover hover:-translate-y-1 duration-300">
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <Mail className="h-8 w-8 text-royal" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-steel mb-2">Email Address</h3>
                                <p className="text-steel-light">alnastransports@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-6 transform transition-hover hover:-translate-y-1 duration-300">
                            <div className="bg-blue-100 p-4 rounded-xl">
                                <Clock className="h-8 w-8 text-royal" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-steel mb-2">Working Hours</h3>
                                <p className="text-steel-light">Saturday - Thursday: 8:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Map Placeholder */}
                    <div className="relative h-[500px] w-full bg-steel rounded-3xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-40 grayscale group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative h-full flex flex-col items-center justify-center p-12 text-center text-white space-y-6">
                            <div className="w-20 h-20 bg-royal rounded-full flex items-center justify-center animate-bounce shadow-xl shadow-royal/40">
                                <MapPin className="h-10 w-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Based in Doha, Qatar</h3>
                                <p className="text-blue-100">Serving all industrial zones and sea ports across the State of Qatar.</p>
                            </div>
                            <div className="pt-4">
                                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30">
                                    Strategic Location
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
