'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('title');
  const [activeSection, setActiveSection] = useState<number | null>(null)

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
      <div className='fixed right-14 top-1/2 -translate-y-1/2 flex flex-col items-center z-50'>
        {currentSection !== 'title' && (
          <div className="absolute top-0 bottom-0 w-0.5 bg-gray-600" />
        )}
        <div className='absolute top-0 bottom-0 w-0.5 bg-gray-600'>
          {sections.map((sec, index) => (
            <button key={sec.id} onClick={() => scrollToSection(sec.id)} className={`relative z-20 w-10 h-10 rounded-full border-2 transition 
            ${currentSection === sec.id ? 'bg-white border-white border-double' : 'border-gray-400 hover:border-white'}`}
              aria-label={sec.label}>
              {(sec.id !== 'title' && sec.id !== 'footer') && (
                index
              )}
            </button>
          ))}
        </div>
      </div>


      {/* Title Section */}
      <section id='title' className="h-screen flex items-center justify-center flex-col relative overflow-hidden">
        <div className="flex items-baseline justify-start mr-80">
          <h1 className="title"> Silver Surfer </h1>
          <div className="rounded-full bg-white h-10 w-10 flex"></div>
        </div>
        <div className="max-w-screen-md p-6">
          <p
            className="text-md md:text-base tracking-tighter lg:text-2xl font-thin opacity-60"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 0.6 - scrollY / 1000),
            }}
          >
            Your partner for bold, results-driven online marketing. We help
            brands grow, connect with their audience, and stand out in the
            digital world.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section id='section1' className="h-screen flex flex-col py-48 ml-28 relative">
        <div className="flex items-baseline flex-row gap-6">
          <span className="no">1</span>
          <div className="rounded-full bg-white h-14 w-14"></div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h2 className="header">Discovery</h2>
              <button onClick={() => setActiveSection(1)}
                className="ml-4 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition">
                <ArrowRight size={28} />
              </button>
            </div>
            <p className="mt-6 text-md md:text-base tracking-tighter lg:text-2xl font-thin opacity-60">
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
          <h2 className="text-4xl font-bold">More about Discovery</h2>
          <p className="text-lg leading-relaxed">
            ni
          </p>
          <p className="text-lg leading-relaxed">
            You deep dive into our past Projects and get to know us.
          </p>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda unde rerum recusandae. Fuga quam beatae magni hic debitis mollitia et, eos temporibus dolor ratione vel non in aperiam molestias commodi!
          </p>
        </div>
      </div>


      {/* Section 2 */}
      <section id='section2' className="h-screen flex flex-col py-48 ml-28 relative">
        <div className="flex items-baseline flex-row gap-6">
          <span className="no">2</span>
          <div className="rounded-full bg-white h-14 w-14"></div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h2 className="header">Social Proof</h2>
              <button onClick={() => setActiveSection(2)}
                className="ml-4 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition">
                <ArrowRight size={28} />
              </button>
            </div>
            <p className="mt-6 text-md md:text-base tracking-tighter lg:text-2xl font-thin opacity-60">
              You deep dive into our past Projects and get to know us.
            </p>
          </div>
        </div>
      </section>

      {/* Slider 2 */}
      <div
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto 
          ${activeSection === 2 ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          onClick={() => setActiveSection(null)}
          className="absolute top-6 right-6 text-2xl"
        >
          <X size={32} />
        </button>

        <div className="p-12 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Kirb</h2>
          <p className="text-lg leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus tempora sed consequuntur molestias amet saepe quibusdam sapiente voluptatem, dolores praesentium eligendi similique ad molestiae labore a assumenda obcaecati nostrum.
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <section id='section3' className="h-screen flex flex-col py-48 ml-28 relative">
        <div className="flex items-baseline flex-row gap-6">
          <span className="no">3</span>
          <div className="rounded-full bg-white h-14 w-14"></div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h2 className="header">Value</h2>
              <button onClick={() => setActiveSection(2)}
                className="ml-4 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition">
                <ArrowRight size={28} />
              </button>
            </div>
            <p className="mt-6 text-md md:text-base tracking-tighter lg:text-2xl font-thin opacity-60">
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
          <span className="no">4</span>
          <div className="rounded-full bg-white h-14 w-14"></div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <h2 className="header">Closing</h2>
              <button onClick={() => setActiveSection(2)}
                className="ml-4 p-3 rounded-full bg-white text-black hover:bg-gray-200 transition">
                <ArrowRight size={28} />
              </button>
            </div>
            <p className="mt-6 text-md md:text-base tracking-tighter lg:text-2xl font-thin opacity-60">
              Your product.
            </p>
          </div>
        </div>
      </section>

      {/* Slider 4 */}
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
          <h2 className="text-4xl font-bold">Closing</h2>
          <p className="text-lg leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus tempora sed consequuntur molestias amet saepe quibusdam sapiente voluptatem, dolores praesentium eligendi similique ad molestiae labore a assumenda obcaecati nostrum.
          </p>
        </div>
      </div>


      <footer id='footer' className="flex flex-col text-sm text-gray-400 mt-32 pb-4">
        <div className="h-px w-full bg-white opacity-20 mb-12"></div>
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-12 px-6">
          <div className="space-y-3">
            <h4 className="text-white text-lg font-semibold">Silver Surfer GmbH</h4>
            <p className="leading-relaxed">
              Bahnhofstrasse 45 <br />
              8001 Zürich <br />
              Switzerland
            </p>
            <p>
              <a href="mailto:contact@silversurfer.ch" className="hover:text-white transition">
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
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-white font-medium">Support</h5>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 px-6 mt-12 pt-6 border-t border-white/10">
          <p>© {new Date().getFullYear()} Silver Surfer GmbH. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" aria-label="Instagram" className="hover:text-white transition">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition">LinkedIn</a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
