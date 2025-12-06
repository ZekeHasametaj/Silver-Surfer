'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('title');
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    { id: 'title', label: 'Start' },
    { id: 'section1', label: 'Über Uns' },
    { id: 'section2', label: 'Leistungen' },
    { id: 'section3', label: 'Oft gestellte Fragen' },
    { id: 'section4', label: 'Referenzen' },
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
          if (sec.id === 'footer') {
            if (rect.top <= window.innerHeight) current = sec.id;
          } else {
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* nav */}
      <h1 className='fixed bg-black rounded z-50 font-bold title text-4xl top-10 left-10'>Silver Surfer.</h1>
      <div className="fixed z-50 right-0 left-0 md:right-10 md:left-auto top-14 md:top-14 md:-translate-y-1/2
        flex flex-row items-center justify-center gap-2 px-3 py-2 rounded-3xl backdrop-blur-2xl 
      bg-white/10 border border-white/20 shadow-[0_8px_30px_rgb(0_0_0_/_0.12)]">
        {sections.map((sec, index) => {
          const isActive = currentSection === sec.id;
          const isPast =
            sections.findIndex((s) => s.id === currentSection) >= index;

          return (
            <div key={sec.id} className="relative flex flex-col items-center">
              <button
                onClick={() => scrollToSection(sec.id)}
                className={`relative z-20 py-1 px-3 rounded-3xl transition
                  ${isActive ? 'lg-button-selected bg-black' : 'lg-button'}`}
                aria-label={sec.label}
              >
                {sec.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* title */}
      <section
        id="title"
        className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="flex flex-row md:flex-col items-end md:items-start justify-start gap-3 md:mr-80">
          <h1 className="title text-[clamp(1.5rem,20vw,5rem)] text-left break-words">
            Mehr Kunden. <br />
            Weniger Aufwand.
          </h1>
          <p className="paragraph mt-0">
            Webseiten  • Ads • Automatisierungen • KI Agenten • Content Creation
          </p>
          <button className="mt-4 px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white flex items-center gap-2 hover:bg-white/20 transition">
            Beratung vereinbaren
            <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex items-end justify-end text-right self-stretch">
          <h3 className="text-gray-300 leading-relaxed text-lg md:text-xl">
            Digitale Lösungen & KI-Automationen, <br />
            die Ihr Unternehmen skalieren.
          </h3>
        </div>
      </section>

      {/* section 1 */}
      <section id="section1" className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-6 md:mr-80">
          <div className="flex flex-col max-w-md md:max-w-2xl">
            <div className="flex flex-row md:flex-col items-end md:items-start justify-start gap-3 md:mr-80">
              <h3 className="header">Über Uns</h3>
              <button className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white flex items-center gap-2 hover:bg-white/20 transition">
                Beratung vereinbaren
                <span className="text-xl">→</span>
              </button>
            </div>
            <p className="paragraph text-left">You deep dive into our past Projects and get to know us.</p>
          </div>
        </div>
      </section>

      {/* slider 1 */}
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
        <div className="p-6 md:p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Discovery</h2>
          <p className="text-lg leading-relaxed">Lots of details here...</p>
        </div>
      </div>

      {/* section 2 */}
      <section
        id="section2"
        className="min-h-screen flex flex-col py-16 md:py-48 px-6 md:ml-28 relative text-center md:text-left"
      >
        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-6 md:gap-12">
          <div className="flex flex-row items-baseline gap-3">
            <span className="no">2</span>
            <div className="rounded-full bg-white h-12 w-12 md:h-14 md:w-14"></div>
          </div>

          <div className="flex flex-col max-w-md md:max-w-2xl">
            <div className="flex flex-col md:flex-row md:items-center items-center gap-4 justify-center">
              <h2 className="header">Social Proof</h2>
              <button
                onClick={() => setActiveSection(2)}
                className="mt-4 md:mt-0 md:ml-4 flex items-center justify-start md:justify-center gap-2 
                w-[80vw] md:w-[44px] h-[40px] md:h-[44px] rounded-full 
                bg-white text-black font-medium hover:bg-gray-200 transition px-4 md:px-0 min-w-[44px] md:min-w-[44px]">
                <ArrowRight size={20} className="flex-shrink-0" />
              </button>
            </div>
            <p className="paragraph">You deep dive into our past Projects and get to know us.</p>
          </div>
        </div>
      </section>

      {/* slider 2 */}
      <div
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto ${activeSection === 2 ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 right-6 text-2xl"        >
          <X size={32} />
        </button>
        <div className="p-6 md:p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">More about Social Proof</h2>
          <p className="text-lg leading-relaxed">Lots of details here...</p>
        </div>
      </div>

      {/* section 3 */}
      <section
        id="section3"
        className="min-h-screen flex flex-col py-16 md:py-48 px-6 md:ml-28 relative text-center md:text-left"
      >
        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-6 md:gap-12">
          <div className="flex flex-row items-baseline gap-3">
            <span className="no">3</span>
            <div className="rounded-full bg-white h-12 w-12 md:h-14 md:w-14"></div>
          </div>

          <div className="flex flex-col max-w-md md:max-w-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:justify-start">
              <h2 className="header">Value</h2>
              <button
                onClick={() => setActiveSection(3)}
                className="mt-4 md:mt-0 md:ml-4 flex items-center justify-start md:justify-center gap-2 
                w-[80vw] md:w-[44px] h-[40px] md:h-[44px] rounded-full 
                bg-white text-black font-medium hover:bg-gray-200 transition px-4 md:px-0 min-w-[44px] md:min-w-[44px]"
              >
                <ArrowRight size={22} className="md:size-7" />
              </button>
            </div>
            <p className="paragraph">Our Work for you.</p>
          </div>
        </div>
      </section>

      {/* slider 3 */}
      <div
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto ${activeSection === 3 ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 right-6 text-2xl"
        >
          <X size={32} />
        </button>

        <div className="p-6 md:p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Value</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            natus tempora sed consequuntur molestias amet saepe quibusdam.
          </p>
        </div>
      </div>

      {/* section 4 */}
      <section
        id="section4"
        className="min-h-screen flex flex-col py-16 md:py-48 px-6 md:ml-28 relative text-center md:text-left"
      >
        <div className="flex flex-col md:flex-row items-center md:items-baseline gap-6 md:gap-12">
          <div className="flex flex-row items-baseline gap-3">
            <span className="no">4</span>
            <div className="rounded-full bg-white h-12 w-12 md:h-14 md:w-14"></div>
          </div>

          <div className="flex flex-col max-w-md md:max-w-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:justify-start">
              <h2 className="header">Closing</h2>
              <button
                onClick={() => setActiveSection(4)}
                className="mt-4 md:mt-0 md:ml-4 flex items-center justify-start md:justify-center gap-2 
                w-[80vw] md:w-[44px] h-[40px] md:h-[44px] rounded-full 
                bg-white text-black font-medium hover:bg-gray-200 transition px-4 md:px-0 min-w-[44px] md:min-w-[44px]"
              >
                <ArrowRight size={22} className="md:size-7" />
              </button>
            </div>
            <p className="paragraph">Your product.</p>
          </div>
        </div>
      </section>

      {/* slider 4 */}
      <div
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto ${activeSection === 4 ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 right-6 text-2xl"
        >
          <X size={32} />
        </button>

        <div className="p-6 md:p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Closing</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            natus tempora sed consequuntur molestias amet saepe quibusdam.
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
