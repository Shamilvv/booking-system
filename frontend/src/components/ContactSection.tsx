"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-16 lg:py-24 bg-petrol overflow-hidden isolate">
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-safety-orange/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center mb-16">
                    <h2 className="text-xs font-black tracking-[0.2em] text-safety-orange uppercase mb-4 drop-shadow-sm">Reach Out To Us</h2>
                    <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none">
                        CONTACT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-orange to-yellow-500">LOCATION</span>
                    </p>
                    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-safety-orange to-transparent mx-auto rounded-full" />
                    <p className="mt-8 text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        Whether you need immediate logistics assistance or want to visit our offices, our dedicated team is ready to deliver excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Contact Form Section */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-safety-orange/5 rounded-full blur-[80px] -z-10 transition-all duration-700 group-hover:scale-150" />

                        <h3 className="text-2xl font-black text-white mb-8 flex items-center uppercase tracking-tight">
                            <Send className="w-6 h-6 mr-3 text-safety-orange" />
                            Ready to move? Contact our experts.
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-widest text-slate-300 block">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-safety-orange focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-300 block">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-safety-orange focus:border-transparent transition-all"
                                        placeholder="+974 0000 0000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-300 block">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-safety-orange focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-slate-300 block">Service Needed</label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white focus:outline-none focus:ring-2 focus:ring-safety-orange focus:border-transparent transition-all appearance-none"
                                    style={{ colorScheme: 'dark' }}
                                >
                                    <option value="" disabled className="text-slate-500">Select a service...</option>
                                    <option value="Light to Medium Trucks">Light to Medium Trucks</option>
                                    <option value="Heavy Duty Trailers">Heavy Duty Trailers</option>
                                    <option value="Specialized Boom Trucks">Specialized Boom Trucks</option>
                                    <option value="Chemical Transport">Chemical Transport</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-300 block">How can we help?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 sm:py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-safety-orange focus:border-transparent transition-all resize-none"
                                    placeholder="Please describe your requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-safety-orange hover:bg-white hover:text-petrol text-white font-black uppercase tracking-widest py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-safety-orange/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Submit Request
                                        <Send className="w-5 h-5 ml-2" />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center text-emerald-400">
                                    <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0" />
                                    <p className="text-sm font-medium">Thank you! Your message has been sent successfully. We will get back to you shortly.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-safety-orange/10 border border-safety-orange/20 rounded-xl flex items-center text-safety-orange">
                                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                    <p className="text-sm font-medium">Something went wrong while sending your message. Please try again or contact us directly.</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Details & Map Stack */}
                    <div className="space-y-6 lg:space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-safety-orange/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                                    <MapPin className="h-24 w-24 text-safety-orange" />
                                </div>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 border border-white/10 text-safety-orange">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">Our Office</h3>
                                    <p className="text-slate-300 font-medium text-sm leading-relaxed">
                                        Street 330, Building No:57, Zone:25<br />
                                        Office No:10, 4th Floor Buzwair Building<br />
                                        Near Almeera, Doha, Qatar
                                    </p>
                                </div>
                            </div>

                            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-safety-orange/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                                    <Phone className="h-24 w-24 text-safety-orange" />
                                </div>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 border border-white/10 text-safety-orange">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">Contact</h3>
                                    <div className="space-y-2 text-slate-300 font-medium text-sm">
                                        <p className="flex items-center">
                                            <span className="text-white mr-2 text-xs uppercase tracking-widest">Hotline:</span>
                                            <a href="tel:+97430395678" className="hover:text-safety-orange transition-colors">+974 30395678</a>
                                        </p>
                                        <p className="flex items-center">
                                            <span className="text-white mr-2 text-xs uppercase tracking-widest">Opers:</span>
                                            <a href="tel:+97466676657" className="hover:text-safety-orange transition-colors">+974 66676657</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-safety-orange/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                                    <Mail className="h-24 w-24 text-safety-orange" />
                                </div>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 border border-white/10 text-safety-orange">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">Email</h3>
                                    <a href="mailto:alnasqatar@yahoo.com" className="text-slate-300 font-medium hover:text-safety-orange transition-colors text-sm break-all">
                                        alnasqatar@yahoo.com
                                    </a>
                                </div>
                            </div>

                            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-safety-orange/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                                    <Clock className="h-24 w-24 text-safety-orange" />
                                </div>
                                <div className="relative z-10">
                                    <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 border border-white/10 text-safety-orange">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight">Hours</h3>
                                    <p className="text-slate-300 font-medium text-sm">
                                        <span className="block text-white mb-1 text-xs uppercase tracking-widest">Sat - Thu</span>
                                        8:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location Panel */}
                        <div className="relative h-48 sm:h-64 rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-slate-900">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572224523315-77983637537b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-50"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/60 to-transparent"></div>

                            <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                                <div className="mb-auto self-end">
                                    <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20 text-white shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                                        <div className="w-2 h-2 rounded-full bg-safety-orange mr-2 animate-pulse" />
                                        Qatar HQ
                                    </div>
                                </div>

                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tighter text-white uppercase drop-shadow-md">Based in Doha</h3>
                                    <p className="text-slate-300 font-medium text-sm leading-relaxed max-w-sm drop-shadow">
                                        Strategically positioned to serve all industrial zones and sea ports across Qatar.
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

