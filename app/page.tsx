'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('title');
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    { id: 'title', label: 'Title' },
    { id: 'section1', label: 'Discovery' },
    { id: 'section2', label: 'Social Proof' },
    { id: 'section3', label: 'Value' },
    { id: 'section4', label: 'Closing' },
    { id: 'footer', label: 'Footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      let current = 'title';
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (sec.id === "footer") {
            if (rect.top <= window.innerHeight) {
              current = sec.id;
            }
          } else {
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              current = sec.id;
            }
          }
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* Side Nav */}
      <div
        className="fixed z-50 right-4 md:right-14 bottom-4 md:bottom-auto md:top-1/2 -translate-y-0 md:-translate-y-1/2 flex md:flex-col flex-row items-center justify-center gap-6">
        {sections.map((sec, index) => {
          const isActive = currentSection === sec.id;
          const isPast = sections.findIndex(s => s.id === currentSection) >= index;

          return (
            <div key={sec.id} className="relative flex flex-col items-center">
              <button
                onClick={() => scrollToSection(sec.id)}
                className={`relative z-20 w-8 h-8 md:w-10 md:h-10 rounded-full transition 
                ${isActive ? 'bg-white' : 'bg-transparent'} 
                ${sec.id === 'title'
                    ? 'border-2 border-white after:content-[""] after:absolute after:inset-[-6px] after:rounded-full after:border-2 after:border-white after:z-[-1]'
                    : isActive
                      ? 'border-2 border-white'
                      : 'border-2 border-gray-400 hover:border-white'
                  }`}
                aria-label={sec.label}
              >
                {(sec.id !== 'title' && sec.id !== 'footer') && index}
              </button>

              {/* line */}
              {index < sections.length - 1 && (
                <div
                  className={` ${isPast ? 'bg-white' : 'bg-gray-600'} transition-all duration-300 md:w-0.5 md:flex-1 w-full h-0.5 md:h-auto `}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* title */}
      <section
        id="title"
        className="h-screen flex items-center justify-center flex-col relative overflow-hidden px-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:mr-80">
          <h1 className="title text-[clamp(2rem,8vw,6rem)] font-bold break-words leading-tight text-center md:text-left">
            Silver Surfer
          </h1>
          <div className="rounded-full bg-white h-10 w-10 flex"></div>
        </div>
        <div className="max-w-screen-md p-6">
          <p className="paragraph text-center mt-0"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 0.6 - scrollY / 1000),
            }}>
            Your partner for bold, results-driven online marketing. We help
            brands grow, connect with their audience, and stand out in the
            digital world.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section id="section1" className="h-screen flex flex-col py-24 md:py-48 px-6 md:ml-28 relative">
        <div className="flex flex-col md:flex-row items-start md:items-baseline gap-6 md:gap-12">
          <div className='flex flex-row items-baseline gap-3'>
            <span className="no">1</span>
            <div className="rounded-full bg-white h-12 w-12 md:h-14 md:w-14"></div>
          </div>

          <div className="flex flex-col max-w-md md:max-w-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h2 className="header">
                Discovery
              </h2>
              <button
                onClick={() => setActiveSection(1)}
                className="mt-4 md:mt-0 ml-0 md:ml-4 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition"
              >
                <ArrowRight size={28} />
              </button>
            </div>
            <p className="paragraph">
              You deep dive into our past Projects and get to know us.
            </p>
          </div>
        </div>
      </section>
      {/* Slider 1 */}
      <div
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto ${activeSection === 1 ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 right-6 text-2xl"
        >
          <X size={32} />
        </button>
        <div className="p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Discovery</h2>
          <p className="text-lg leading-relaxed">Lots of details here...</p>
        </div>
      </div>

      {/* Section 2 */}
      <section id="section2" className="h-screen flex flex-col py-24 md:py-48 px-6 md:ml-28 relative">
        <div className="flex flex-col md:flex-row items-start md:items-baseline gap-6 md:gap-12">
          <div className='flex flex-row items-baseline gap-3'>
            <span className="no">2</span>
            <div className="rounded-full bg-white h-12 w-12 md:h-14 md:w-14"></div>
          </div>

          <div className="flex flex-col max-w-md md:max-w-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h2 className="header">
                Social Proof
              </h2>
              <button
                onClick={() => setActiveSection(2)}
                className="mt-4 md:mt-0 ml-0 md:ml-4 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition"
              >
                <ArrowRight size={28} />
              </button>
            </div>
            <p className="paragraph">
              Showcasing what others think about us.
            </p>
          </div>
        </div>
      </section>

      {/* Slider 2 */}
      <div className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto ${activeSection === 2 ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 right-6 text-2xl"
        >
          <X size={32} />
        </button>
        <div className="p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">More about Social Proof</h2>
          <p className="text-lg leading-relaxed">Lots of details here...</p>
        </div>
      </div>

      {/* Section 3 */}
      <section id='section3' className="h-screen flex flex-col py-48 ml-28 relative">
        <div className="flex items-baseline flex-row gap-6">
          <div className='flex flex-row items-baseline gap-3'>
            <span className="no">3</span>
            <div className="rounded-full bg-white h-14 w-14"></div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h2 className="header">Value</h2>
              <button onClick={() => setActiveSection(3)}
                className="ml-4 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition">
                <ArrowRight size={28} />
              </button>
            </div>
            <p className="paragraph">
              Our Work for you.
            </p>
          </div>
        </div>
      </section>

      {/* Slider 3 */}
      <div
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto 
          ${activeSection === 3 ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 right-6 text-2xl"
        >
          <X size={32} />
        </button>

        <div className="p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Value</h2>
          <p className="text-lg leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus tempora sed consequuntur molestias amet saepe quibusdam sapiente voluptatem, dolores praesentium eligendi similique ad molestiae labore a assumenda obcaecati nostrum.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <section id='section4' className="h-screen flex flex-col py-48 ml-28 relative">
        <div className="flex items-baseline flex-row gap-6">
          <div className='flex flex-row items-baseline gap-3'>
            <span className="no">4</span>
            <div className="rounded-full bg-white h-14 w-14"></div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h2 className="header">Closing</h2>
              <button onClick={() => setActiveSection(4)}
                className="ml-4 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition">
                <ArrowRight size={28} />
              </button>
            </div>
            <p className="paragraph">
              Your product.
            </p>
          </div>
        </div>
      </section>

      {/* Slider 4 */}
      <div
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto 
          ${activeSection === 4 ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 right-6 text-2xl"
        >
          <X size={32} />
        </button>

        <div className="p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Closing</h2>
          <p className="text-lg leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus tempora sed consequuntur molestias amet saepe quibusdam sapiente voluptatem, dolores praesentium eligendi similique ad molestiae labore a assumenda obcaecati nostrum.
          </p>
        </div>
      </div>


      {/* Footer */}
      <footer
        id="footer"
        className="flex flex-col text-sm text-gray-400 mt-32 pb-4"
      >
        <div className="h-px w-full bg-white opacity-20 mb-12"></div>
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-12 px-6">
          <div className="space-y-3">
            <h4 className="text-white text-lg font-semibold">
              Silver Surfer GmbH
            </h4>
            <p className="leading-relaxed">
              Bahnhofstrasse 45 <br />
              8001 Zürich <br />
              Switzerland
            </p>
            <p>
              <a
                href="mailto:contact@silversurfer.ch"
                className="hover:text-white transition"
              >
                contact@silversurfer.ch
              </a>
              <br />
              +41 76 506 82 88
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div className="space-y-2">
              <h5 className="text-white font-medium">Company</h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-white font-medium">Support</h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 px-6 mt-12 pt-6 border-t border-white/10">
          <p>
            © {new Date().getFullYear()} Silver Surfer GmbH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
