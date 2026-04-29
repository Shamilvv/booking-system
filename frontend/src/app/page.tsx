import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Credentials from '@/components/Credentials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Credentials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
