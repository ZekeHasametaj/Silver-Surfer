'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <h1 
            className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-thin tracking-widest mb-4 transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              opacity: Math.max(0, 1 - scrollY / 800)
            }}
          >
            SILVER SURFER
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl font-thin opacity-60 tracking-wide"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 0.6 - scrollY / 1000)
            }}
          >
            Herald of Galactus, Rider of the Cosmic Waves
          </p>
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="h-screen flex items-center relative">
        <div className="absolute left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2">
          <span className="section-number">1</span>
        </div>
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 ml-auto">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8">
              The Power Cosmic
            </h2>
            <div className="space-y-6 text-lg md:text-xl lg:text-2xl font-thin opacity-80 leading-relaxed">
              <p>
                Once mortal, Norrin Radd sacrificed everything to save his homeworld Zenn-La from the cosmic devourer, Galactus.
              </p>
              <p>
                Transformed by the Power Cosmic, he became the Silver Surfer—a being of immense power, soaring through the cosmos on his quantum surfboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-screen flex items-center relative">
        <div className="absolute left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2">
          <span className="section-number">2</span>
        </div>
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 ml-auto">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8">
              Cosmic Guardian
            </h2>
            <div className="space-y-6 text-lg md:text-xl lg:text-2xl font-thin opacity-80 leading-relaxed">
              <p>
                Breaking free from his master's service, the Silver Surfer became a protector of life throughout the universe.
              </p>
              <p>
                With abilities that defy comprehension—matter manipulation, energy projection, and faster-than-light travel—he stands as one of the cosmos' mightiest defenders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Additional section for visual balance */}
      <section className="h-screen flex items-center relative">
        <div className="absolute left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2">
          <span className="section-number">3</span>
        </div>
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 ml-auto">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8">
              Endless Journey
            </h2>
            <div className="space-y-6 text-lg md:text-xl lg:text-2xl font-thin opacity-80 leading-relaxed">
              <p>
                Through endless galaxies and infinite realities, the Silver Surfer continues his eternal vigil.
              </p>
              <p>
                A solitary figure against the cosmic dark, forever seeking redemption, purpose, and the preservation of life in all its forms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}