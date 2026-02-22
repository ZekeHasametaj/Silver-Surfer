const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); } });
},{threshold:0.18});
reveals.forEach(r=>io.observe(r));

const counters = document.querySelectorAll('.count');
const cIo = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 70));
    const tick = () => {
      current += step;
      if(current >= target){ el.textContent = target.toLocaleString('de-CH'); return; }
      el.textContent = current.toLocaleString('de-CH');
      requestAnimationFrame(tick);
    };
    tick();
    cIo.unobserve(el);
  })
},{threshold:0.5});
counters.forEach(c=>cIo.observe(c));