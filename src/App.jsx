import { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CodingStats from './components/CodingStats';
import Projects from './components/Projects';
import Reports from './components/Reports';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-display text-neo-black antialiased">
      <Cursor />
      <div
        id="progressBar"
        className="fixed left-0 top-0 z-[60] h-2 border-b-2 border-black bg-neo-green"
        style={{ width: `${progress}%` }}
      />

      <Navbar />
      <main>
        <Hero />
        <Marquee text="/// OPEN FOR WORK /// FULL STACK DEVELOPMENT /// AI-DRIVEN AUTOMATION /// WEB3 READY /// DEVOPS /// FAST /// SECURE ///" />
        <About />
        <Skills />
        <Experience />
        <CodingStats />
        <Projects />
        <Reports />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
