"use client";

import { ShieldCheck, Clock, Award, CheckCircle2, TrendingUp, Truck } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// A simple hook to animate numbers counting up
function useCountUp(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isIntersecting) return;

        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // easeOutQuart for smooth deceleration
            const easeOut = 1 - Math.pow(1 - percentage, 4);
            
            setCount(Math.floor(end * easeOut));

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, isIntersecting]);

    return { count, ref };
}

function StatCard({ 
    name, 
    value, 
    suffix = '', 
    icon: Icon, 
    isNumber = false, 
    delay = 0 
}: { 
    name: string, 
    value: string | number, 
    suffix?: string, 
    icon: any, 
    isNumber?: boolean,
    delay?: number
}) {
    const numericValue = typeof value === 'number' ? value : 0;
    const { count, ref } = useCountUp(numericValue, 2500);

    return (
        <div 
            ref={ref}
            className={`group flex flex-col items-center justify-center p-8 sm:p-10 bg-white border border-gray-100 hover:border-safety-orange/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,61,76,0.1)] hover:-translate-y-2 transition-all duration-500`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex items-center justify-center h-20 w-20 mb-8 bg-gray-50 text-safety-orange group-hover:bg-safety-orange group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                <Icon strokeWidth={1.5} className="h-10 w-10" />
            </div>
            
            <div className="text-5xl sm:text-6xl font-black text-petrol tracking-tighter mb-4 flex items-baseline group-hover:text-safety-orange transition-colors duration-500">
                {isNumber ? count.toLocaleString() : value}
                <span className="text-safety-orange ml-1 text-4xl sm:text-5xl group-hover:text-petrol transition-colors duration-500">{suffix}</span>
            </div>
            
            <div className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-[0.2em] text-center group-hover:text-petrol transition-colors">
                {name}
            </div>
        </div>
    );
}

export default function Stats() {
    return (
        <div className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden border-t border-gray-100">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-[-12deg] translate-x-1/2 -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 bg-safety-orange/10 border border-safety-orange/20 px-4 py-1.5 rounded-full mb-6">
                        <span className="w-2 h-2 bg-safety-orange rounded-full animate-pulse"></span>
                        <span className="text-petrol text-xs font-black uppercase tracking-[0.2em]">Why Choose Us</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-petrol tracking-tighter leading-none mb-6">
                        BUILDING <span className="text-safety-orange">TRUST</span> THROUGH <br className="hidden sm:block" />
                        <span className="opacity-40">PROVEN PERFORMANCE.</span>
                    </h2>
                    
                    <p className="max-w-2xl mx-auto text-lg text-steel-light font-medium leading-relaxed">
                        We don't just move cargo; we deliver peace of mind. Our numbers speak to decades of commitment, safety, and reliability.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <StatCard name="Years of Experience" value={20} suffix="+" icon={TrendingUp} isNumber={true} delay={0} />
                    <StatCard name="Completed Projects" value={50000} suffix="+" icon={CheckCircle2} isNumber={true} delay={100} />
                    <StatCard name="Success Rate" value={100} suffix="%" icon={Award} isNumber={true} delay={200} />
                    <StatCard name="On-Time Delivery" value="100" suffix="%" icon={Clock} isNumber={false} delay={300} />
                    <StatCard name="Goods Safety" value="100" suffix="%" icon={ShieldCheck} isNumber={false} delay={400} />
                    <StatCard name="Trusted Partner" value="#1" suffix="" icon={Truck} isNumber={false} delay={500} />
                </div>
            </div>
        </div>
    );
}
