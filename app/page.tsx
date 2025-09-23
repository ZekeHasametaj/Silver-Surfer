'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center flex-col relative overflow-hidden">
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
      <section className="min-h-screen flex flex-col py-48 ml-28 relative">
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
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto ${
          activeSection === 1 ? 'translate-x-0' : 'translate-x-full'
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
      <section className="min-h-screen flex flex-col py-48 ml-28 relative">
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
        className={`fixed inset-0 bg-white text-black transform transition-transform duration-500 z-50 overflow-y-auto ${
          activeSection === 2 ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
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
    </main>
  );
}
