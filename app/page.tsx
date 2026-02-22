export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#050505', color: '#fff', fontFamily: 'Inter, Arial, sans-serif' }}>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '90px 24px 70px' }}>
        <p style={{ opacity: 0.8, letterSpacing: 1 }}>Silver Surfer</p>
        <h1 style={{ fontSize: 'clamp(2rem, 7vw, 5rem)', lineHeight: 1.05, margin: '8px 0 16px' }}>
          Mehr Kunden.<br />Weniger Aufwand.
        </h1>
        <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 820 }}>
          Webseiten • Ads • Automatisierungen • KI-Agenten • Content Creation
        </p>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 48px' }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>Unsere Leistungen</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
          {['Webdesign', 'Paid Ads', 'Automationen', 'AI Voice Agents'].map((item) => (
            <div key={item} style={{ border: '1px solid rgba(255,255,255,.16)', background: 'rgba(255,255,255,.06)', borderRadius: 14, padding: 18 }}>
              <strong>{item}</strong>
              <p style={{ opacity: 0.8, marginTop: 8, lineHeight: 1.45 }}>Skalierbare Umsetzung für lokale Businesses mit klarem ROI-Fokus.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: 28, marginBottom: 10 }}>Kontakt</h2>
        <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
          Silver Surfer GmbH · Bahnhofstrasse 45 · 8001 Zürich<br />
          contact@silversurfer.ch · +41 76 506 82 88
        </p>
      </section>
    </main>
  );
}
